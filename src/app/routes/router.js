import express from 'express';
import ManagerController from '../controllers/manager.controller.js';
// import findUserById from '../controllers/manager.controller.js';
import Admin from '../controllers/admin.controller.js';

const router = express.Router();

router.get('/healthcheck', (req, res) => {
    res.json({ message: 'Health check: server online!' });
});

// Admin route > create manager
router.post('/api/admin/manager', Admin.create);

// Manager routes
// const managerController = new ManagerController();

//rota do gestor para criar funcionário
router.post('/api/manager/employee', ManagerController.crateEmployee);

// rota do gestor para listar todos os funcionários
router.get('/api/manager/employee', ManagerController.listAllEmployees);

// rota do gestor para deletar funcionário
router.delete('/api/manager/employee/:id', ManagerController.deleteEmployee);

//listar usuário por id
router.get('/api/manager/employee/:id', ManagerController.findUserById);

export default router;
