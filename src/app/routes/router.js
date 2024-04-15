import express from 'express';
const router = express.Router();
import findUserById from '../controllers/manager.controller.js';
import Admin from '../controllers/admin.controller.js';

router.get('/healthcheck', (req, res) => {
    res.json({ message: 'Health check: server online!' });
});

// Admin route > create manager
router.post('/api/admin/manager', Admin.create);

//listar usuário por id
router.get('/:id', findUserById);

export default router;
