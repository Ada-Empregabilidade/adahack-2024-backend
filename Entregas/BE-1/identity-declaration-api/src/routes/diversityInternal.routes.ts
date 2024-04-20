import express from 'express';
import { DiversityController } from '../controllers/DiversityController';
import { authMiddleware } from '../middleware/AuthMiddleware';
import { validateSubmission } from '../middleware/ValidateSubmissionMiddleware';
import { internalFlagMiddleware } from '../middleware/InternalFlagMiddleware';
import { validateQueryParamsMiddleware } from '../middleware/ValidateQueryParams';

export function diversityInternalRoutes(router: express.Router, diversityController: DiversityController) {

    router.get(
        '/diversity/internal/questions',
        authMiddleware,
        diversityController.getQuestions.bind(diversityController)
    );
    router.post(
        '/diversity/internal/submit',
        validateSubmission,
        authMiddleware,
        internalFlagMiddleware,
        diversityController.submitResponse.bind(diversityController)
    );
    router.get(
        '/diversity/internal/responses',
        validateQueryParamsMiddleware,
        authMiddleware, 
        diversityController.getDiversityResponses.bind(diversityController)
    );
    router.get(
        '/diversity/internal/responses/stats',
        validateQueryParamsMiddleware,
        authMiddleware,
        diversityController.getDiversityStats.bind(diversityController)
    );

    return router;
}
