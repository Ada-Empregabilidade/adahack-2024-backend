import { Request, Response, NextFunction } from 'express';
import logger from '../utils/logger';
import { SubmissionField } from '../models/SubmissionField';
import { AgeGroup } from '../enums/AgeGroupCode';
import { Gender } from '../enums/GenderGroupCode';
import { Ethnicity } from '../enums/EthnicityGroupCode';
import { Disability } from '../enums/DesabilityGroupCode';

const fieldEnumMap: Record<string, any> = {
    ageGroupCode: AgeGroup,
    genderCode: Gender,
    ethnicityCode: Ethnicity,
    disabilityCode: Disability
};

const getEnumValues = (enumType: any): string[] => {
    return Object.values(enumType).filter((value): value is string => typeof value === 'string');
};

const validateField = (fields: SubmissionField[], errors: any[], location: string): void => {
    fields.forEach(field => {
        if (field.value === undefined) {
            errors.push({
                value: field.value,
                param: `responses.${field.fieldName}`,
                msg: `${field.fieldName} is required.`,
                location
            });
        } else {
            const enumType = fieldEnumMap[field.fieldName];
            if (enumType) {
                const validValues = getEnumValues(enumType);
                if (!validValues.includes(field.value)) {
                    const predefinedValues = validValues.join(', ');
                    errors.push({
                        value: field.value,
                        param: `responses.${field.fieldName}`,
                        msg: `${field.fieldName} must be one of the predefined codes (${predefinedValues}).`,
                        location
                    });
                }
            } else if (typeof field.value !== field.type) {
                errors.push({
                    value: field.value,
                    param: `responses.${field.fieldName}`,
                    msg: `${field.fieldName} must be a ${field.type}.`,
                    location
                });
            }
        }
    });
};


export const validateSubmissionRules = () => {
    return (req: Request, res: Response, next: NextFunction) => {
        let errors: { value?: any; msg: string; param: string; location: string }[] = [];
        const { responses } = req.body;

        if (!responses) {
            errors.push({
                param: 'responses',
                msg: 'Responses object is missing.',
                location: 'body'
            });
        } else {
            const fieldsToValidate: SubmissionField[] = [
                { value: responses.ageGroupCode, type: 'string', fieldName: 'ageGroupCode' },
                { value: responses.genderCode, type: 'string', fieldName: 'genderCode' },
                { value: responses.ethnicityCode, type: 'string', fieldName: 'ethnicityCode' },
                { value: responses.disabilityCode, type: 'string', fieldName: 'disabilityCode' },
                { value: responses.lgbtqia, type: 'boolean', fieldName: 'lgbtqia' },
                { value: responses.parent, type: 'boolean', fieldName: 'parent' },
            ];
            validateField(fieldsToValidate, errors, 'body');
        }

        if (errors.length > 0) {
            return res.status(400).json({
                status: 'error',
                message: 'Invalid submission data.',
                errors
            });
        }
        next();
    };
};

export function validateSubmission(req: Request, res: Response, next: NextFunction) {
    try {
        validateSubmissionRules()(req, res, next);
    } catch (error: unknown) {
        if (error instanceof Error) {
            logger.error("Validation error: %s", error.message);
            return res.status(500).json({
                status: 'error',
                message: 'Error during validation.',
                errors: [error.message]
            });
        } else {
            logger.error("An unexpected error occurred");
            return res.status(500).json({
                status: 'error',
                message: 'An unexpected error occurred'
            });
        }
    }
}
