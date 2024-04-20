import { Request, Response, NextFunction } from 'express';
import { BooleanString } from '../enums/BooleanString';
import { CustomRequest } from '../models/CustomRequest';
import { AgeGroup } from '../enums/AgeGroupCode';
import { Ethnicity } from '../enums/EthnicityGroupCode';
import { Disability } from '../enums/DesabilityGroupCode';
import { Gender } from '../enums/GenderGroupCode';

function parseBooleanQueryParam(param: string | null): boolean | null | undefined {
    if (param === BooleanString.TRUE) return true;
    if (param === BooleanString.FALSE) return false;
    if (param === BooleanString.NULL) return null;
    return undefined;
}

function isEnumValue<T extends Record<string, any>>(enumType: T, value: any): value is T[keyof T] {
    return Object.values(enumType).includes(value);
}

export const validateQueryParamsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const customReq = req as CustomRequest;
    customReq.parsedQuery = {};

    const originalLgbtqia = req.query.lgbtqia as string;
    const originalParent = req.query.parent as string;
    const originalIsInternalResponse = req.query.isInternalResponse as string;
    const originalGender = req.query.gender as string;
    const originalAgeGroup = req.query.ageGroup as string;
    const originalEthnicity = req.query.ethnicity as string;
    const originalDisability = req.query.disability as string;

    customReq.parsedQuery.lgbtqia = parseBooleanQueryParam(originalLgbtqia);
    customReq.parsedQuery.parent = parseBooleanQueryParam(originalParent);
    customReq.parsedQuery.isInternalResponse = parseBooleanQueryParam(originalIsInternalResponse);

    const errors: string[] = [];

    if (customReq.parsedQuery.lgbtqia === undefined && originalLgbtqia !== undefined) {
        errors.push("Invalid value for 'lgbtqia'; must be 'true', 'false', or 'null'.");
    }
    if (customReq.parsedQuery.parent === undefined && originalParent !== undefined) {
        errors.push("Invalid value for 'parent'; must be 'true', 'false', or 'null'.");
    }
    if (customReq.parsedQuery.isInternalResponse === undefined && originalIsInternalResponse !== undefined) {
        errors.push("Invalid value for 'isInternalResponse'; must be 'true' or 'false'. It is 'true' by default if not specified.");
    }


    if (originalAgeGroup && !isEnumValue(AgeGroup, originalAgeGroup)) {
        errors.push(`Invalid value for 'ageGroup'; must be one of: ${Object.values(AgeGroup).join(', ')}.`);
    } else if (originalAgeGroup && isEnumValue(AgeGroup, originalAgeGroup)) {
        customReq.parsedQuery.ageGroupCode = originalAgeGroup as AgeGroup;
    }


    if (originalGender && !isEnumValue(Gender, originalGender)) {
        errors.push(`Invalid value for 'gender'; must be one of: ${Object.values(Gender).join(', ')}.`);
    } else if (originalGender && isEnumValue(Gender, originalGender)) {
        customReq.parsedQuery.genderCode = originalGender as Gender;
    }

    

    if (originalEthnicity && !isEnumValue(Ethnicity, originalEthnicity)) {
        errors.push(`Invalid value for 'ethnicityCode'; must be one of: ${Object.values(Ethnicity).join(', ')}.`);
    } else if (originalEthnicity && isEnumValue(Ethnicity, originalEthnicity)) {
        customReq.parsedQuery.ethnicityCode = originalEthnicity as Ethnicity;
    }

    if (originalDisability && !isEnumValue(Disability, originalDisability)) {
        errors.push(`Invalid value for 'disabilityCode'; must be one of: ${Object.values(Disability).join(', ')}.`);
    } else if (originalDisability && isEnumValue(Disability, originalDisability)) {
        customReq.parsedQuery.disabilityCode = originalDisability as Disability;
    }

    if (errors.length > 0) {
        res.status(400).json({
            status: 'error',
            errors
        });
    } else {        
        next();
    }
};
