import express from 'express';
import { diversityController } from '../controllers/DiversityController';
import { validateSubmission } from '../middleware/ValidateSubmissionMiddleware';

const diversityExternalRoutes = express.Router();

diversityExternalRoutes.get('/diversity/external/questions', diversityController.getQuestions);

diversityExternalRoutes.post('/diversity/external/submit', validateSubmission, diversityController.submitResponse);

export { diversityExternalRoutes }