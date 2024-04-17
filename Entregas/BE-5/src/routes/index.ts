import express from 'express';
import candidateRouter from './candidates/candidate.router';
import { userRouter } from './users/user.routes';
import { auth } from '../middlewares/auth.middleware';

const router = express.Router();

router.use(userRouter);

router.use(auth);

router.use('/candidates', candidateRouter);

export default router;
