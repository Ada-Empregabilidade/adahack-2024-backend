import express from "express";
import ManagerController from "../controllers/manager.controller.js";
import Admin from "../controllers/admin.controller.js";
import  { employeeController } from '../controllers/EmployeeController.js';
import  IndicatorController from "../controllers/indicator.controller.js";


const router = express.Router();

router.get("/healthcheck", (req, res) => {
  res.json({ message: "Health check: server online!" });
});


// Admin route > create manager
router.post("/admin/manager", Admin.create);

// Manager routes
// const managerController = new ManagerController();

//employee router
router.put('/employee/profile', employeeController.updateProfile)

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


router.get('/manager/employee/count/group', IndicatorController.countByGroup);

export default router;
