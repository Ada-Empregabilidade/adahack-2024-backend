import { Request, Response, NextFunction } from 'express';

export function internalFlagMiddleware(req: Request, res: Response, next: NextFunction) {
    if (req.body && req.body.responses) {
        req.body.responses.isInternalResponse = true;
    }
    next();
}
