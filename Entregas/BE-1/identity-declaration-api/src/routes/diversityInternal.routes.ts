import express from 'express';
import { diversityController } from '../controllers/DiversityController';
import { authMiddleware } from '../middleware/AuthMiddleware';
import { validateSubmission } from '../middleware/ValidateSubmissionMiddleware';
import { internalFlagMiddleware } from '../middleware/InternalFlagMiddleware';
import { validateQueryParamsMiddleware } from '../middleware/ValidateQueryParams';

const diversityinternalRoutes = express.Router();

diversityinternalRoutes.get('/diversity/internal/questions', authMiddleware, diversityController.getQuestions);

diversityinternalRoutes.post('/diversity/internal/submit', validateSubmission, authMiddleware, internalFlagMiddleware, diversityController.submitResponse);

diversityinternalRoutes.get('/diversity/internal/responses', validateQueryParamsMiddleware, authMiddleware, diversityController.getDiversityResponses);

diversityinternalRoutes.get('/diversity/internal/responses/stats', validateQueryParamsMiddleware, authMiddleware, diversityController.getDiversityStats);

export { diversityinternalRoutes }