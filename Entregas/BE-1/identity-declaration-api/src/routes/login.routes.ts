import express from 'express';
import { authController } from '../controllers/AuthController';

const authRoute = express.Router();

authRoute.post('/login', authController.login);

export { authRoute }