import express from 'express';
const router = express.Router();
import ManagerController from '../controllers/manager.controller.js';

router.get('/healthcheck', (req, res) => {
    res.json({ message: 'Health check: server online!' });
});

const managerController = new ManagerController();

//rota do gestor para criar funcionário
router.post('/api/manager/employee', (req,res) => managerController.crateEmployee(req,res))

// rota do gestor para listar todos os funcionários
router.get('/api/manager/employee', (req,res ) => managerController.listAllEmployees(req,res));


export default router;
