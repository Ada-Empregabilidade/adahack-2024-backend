import express from "express";
import ManagerController from "../controllers/manager.controller.js";
// import findUserById from '../controllers/manager.controller.js';
import Admin from "../controllers/admin.controller.js";
import  employeeController from '../controllers/EmployeeController.js';

const router = express.Router();

router.get("/healthcheck", (req, res) => {
  res.json({ message: "Health check: server online!" });
});

// admin router
router.post('/api/admin/manager', admin.create);

//employee router
router.put('/api/employee/profile', employeeController.updateProfile)

module.exports = router;
// Admin route > create manager
router.post("/admin/manager", Admin.create);

// Manager routes
// const managerController = new ManagerController();

//rota do gestor para criar funcionário
router.post("/manager/employee", ManagerController.crateEmployee);

// rota do gestor para listar todos os funcionários
router.get("/manager/employee", ManagerController.listAllEmployees);

// rota do gestor para deletar funcionário
router.delete("/manager/employee/:id", ManagerController.deleteEmployee);

//listar usuário por id
router.get("/manager/employee/:id", ManagerController.findUserById);

//rota do gestor para atualizar funcionário
router.put("/manager/employee/:id", ManagerController.updateEmployee);

export default router;
