import express from 'express';
import { DiversityRepository } from '../repositories/DiversityRepository';
import { DiversityService } from '../services/DiversityService';
import { DiversityController } from '../controllers/DiversityController';
import { prismaClient } from './prismaClient';
import { diversityInternalRoutes } from '../routes/diversityInternal.routes';
import { diversityExternalRoutes } from '../routes/diversityExternal.routes';
import { userRoutes } from '../routes/user.routes';
import { UserRepository } from '../repositories/UserRepository';
import { UserService } from '../services/UserService';
import { UserController } from '../controllers/UserController';
import { AuthService } from '../services/AuthService';
import { AuthController } from '../controllers/AuthController';
import { authRoute } from '../routes/login.routes';

const diversityRepository = new DiversityRepository(prismaClient);
const diversityService = new DiversityService(diversityRepository);
const diversityController = new DiversityController(diversityService);

const userRepository = new UserRepository(prismaClient);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

const authService = new AuthService(userRepository);
const authController = new AuthController(authService);

const mainRouter = express.Router();

diversityInternalRoutes(mainRouter, diversityController);
diversityExternalRoutes(mainRouter, diversityController);
userRoutes(mainRouter, userController);
authRoute(mainRouter, authController);

export {
    diversityRepository,
    diversityService,
    diversityController,
    userRepository,
    userService,
    userController,
    authService,
    authController,
    mainRouter
};
