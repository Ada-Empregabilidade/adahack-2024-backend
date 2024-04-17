import express from 'express';
import candidateController, { candidateNewFilterController } from '../../controllers/candidate.controller';
import multer from 'multer';
import {
  candidateCreateConrtoller,
  CandidateList,
} from '../../controllers/candidate.controller';

const router = express.Router();
const upload = multer();

router.post('/upload', upload.single('file'), candidateController.importCandidates);

router.get('/', CandidateList);
router.post('/', candidateCreateConrtoller);
router.post('/filter', candidateNewFilterController);

export default router;