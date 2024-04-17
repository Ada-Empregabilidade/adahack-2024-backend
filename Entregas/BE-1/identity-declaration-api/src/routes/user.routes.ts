import express from 'express';
import { userController } from '../controllers/UserController';
import { validateUserData } from '../middleware/UserValidationMiddleware';
import { authMiddleware } from '../middleware/AuthMiddleware';

const userRoutes = express.Router();

//Get
userRoutes.get('/users', authMiddleware, userController.findAll);

//Post
userRoutes.post('/user', validateUserData, userController.create);

export { userRoutes }