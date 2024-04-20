import express from 'express';
import { AuthController } from '../controllers/AuthController';

export function authRoute(router: express.Router, authController: AuthController) {

    router.post(
        '/login', authController.login.bind(authController)
    );

    return router;

}