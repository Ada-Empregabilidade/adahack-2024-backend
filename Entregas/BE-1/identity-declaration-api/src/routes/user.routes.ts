import express from 'express';
import { UserController } from '../controllers/UserController';
import { validateUserData } from '../middleware/UserValidationMiddleware';
import { authMiddleware } from '../middleware/AuthMiddleware';

export function userRoutes(router: express.Router, userController: UserController) {

    router.get(
        '/users', authMiddleware, userController.findAll.bind(userController)
    );
    router.post(
        '/users', validateUserData, userController.create.bind(userController)
    );

    return router;
}