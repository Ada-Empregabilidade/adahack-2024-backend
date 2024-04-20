import express from 'express';
import { DiversityController } from '../controllers/DiversityController';
import { validateSubmission } from '../middleware/ValidateSubmissionMiddleware';

export function diversityExternalRoutes(router: express.Router, diversityController: DiversityController) {

    router.get(
        '/diversity/external/questions',
        diversityController.getQuestions.bind(diversityController)
    );
    router.post(
        '/diversity/external/submit',
        validateSubmission,
        diversityController.submitResponse.bind(diversityController)
    )
    return router;
}