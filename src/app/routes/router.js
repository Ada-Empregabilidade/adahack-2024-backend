import express from 'express';
const router = express.Router();
import gestor from '../controllers/manager.controller.js';

router.get('/healthcheck', (req, res) => {
    res.json({ message: 'Health check: server online!' });
});

//rota do gestor para criar funcionário
router.post('/api/manager/employee', gestor.crateEmployee)

// rota do gestor para listar todos os funcionários
router.get('/api/manager/employee', gestor.listAllEmployees);


export default router;
