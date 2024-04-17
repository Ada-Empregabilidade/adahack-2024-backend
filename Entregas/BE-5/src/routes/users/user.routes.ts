import express from 'express';
import { Request, Response } from 'express';

import { registerUser, verifyLogin } from '../../controllers/user.controller';

export const userRouter = express();

userRouter.route('/register').post((req: Request, res: Response) => registerUser(req, res));
userRouter.route('/login').post((req: Request, res: Response) => verifyLogin(req, res));
