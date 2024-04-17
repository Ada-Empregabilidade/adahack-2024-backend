import express from 'express';
import { authRoute } from './login.routes';
import { diversityExternalRoutes } from './diversityExternal.routes';
import { diversityinternalRoutes } from './diversityInternal.routes';
import { userRoutes } from './user.routes';

const router = express.Router();

router.use(
    diversityExternalRoutes,
    authRoute,
    diversityinternalRoutes,
    userRoutes    
);

export default router;
