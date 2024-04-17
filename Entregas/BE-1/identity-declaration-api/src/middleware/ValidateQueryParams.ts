import { Request, Response, NextFunction } from 'express';
import { BooleanString } from '../enums/BooleanString';

function parseBooleanQueryParam(param: string): boolean | null | undefined {
    if (param === BooleanString.TRUE) return true;
    if (param === BooleanString.FALSE) return false;
    if (param === BooleanString.NULL) return null;
    return undefined;    
}

export const validateQueryParamsMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const originalLgbtqia = req.query.lgbtqia;
    const originalParent = req.query.parent;
    const originalIsInternalResponse = req.query.isInternalResponse;

    req.query.lgbtqia = parseBooleanQueryParam(req.query.lgbtqia as string);
    req.query.parent = parseBooleanQueryParam(req.query.parent as string);
    req.query.isInternalResponse = parseBooleanQueryParam(req.query.isInternalResponse as string);

    const errors: string[] = [];
    if (req.query.lgbtqia === undefined && originalLgbtqia !== undefined) {
        errors.push("Invalid value for 'lgbtqia'; must be 'true', 'false', or 'null'.");
    }
    if (req.query.parent === undefined && originalParent !== undefined) {
        errors.push("Invalid value for 'parent'; must be 'true', 'false', or 'null'.");
    }
    if (req.query.isInternalResponse === undefined && originalIsInternalResponse !== undefined) {
        errors.push("Invalid value for 'isInternalResponse'; must be 'true', 'false', or 'null'.");
    }

    if (errors.length > 0) {
        return res.status(400).json({
            status: 'error',
            errors
        });
    }
    next(); 
};
