import express from 'express';
const router = express.Router();
import findUserById from '../controllers/manager.controller.js'

router.get('/healthcheck', (req, res) => {
    res.json({ message: 'Health check: server online!' });
});

//listar usuário por id
router.get("/:id", findUserById);


export default router;
