const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const express = require('express');
const router = express.Router();
const routesSetters = require('./routesSetters/routesSetters')
const routerController = require('../controllers/controllers')
const getController = require('../controllers/getController');
const postController = require('../controllers/postController');
const putController = require('../controllers/putController');
const deleteController = require('../controllers/deleteController');
const {userExists, createCandidate, findCandidate,} = require('../services/candidate-services');
const {getAllEmployees, getEmployeeById, registerEmployee, updateEmployee, deleteEmployee
} = require('../services/EmployeeServices')

//get routers

router.use('/api-docs', swaggerUi.serve);
routesSetters.setGetRouters(router, '/api-docs', swaggerUi.setup(swaggerDocument));
routesSetters.setGetRouters(router, '/api/employees', (req, res) => {getController(req, res, getAllEmployees)});
routesSetters.setGetRouters(router, '/api/employees/{id}', (req, res) => {getController(req, res, getEmployeeById)});
routesSetters.setGetRouters(router, '/api/data-analysis/employees', (req, res) => {getController(req, res, analyzeUserData)});
routesSetters.setGetRouters(router, '/api/data-analysis/candidates', (req, res) => {getController(req, res, analyzeUserData)});

// routesSetters.setGetRouters(router, '/api/jobs', (req, res) => {getController(req, res, )});
// routesSetters.setGetRouters(router, '/api/jobs/{id}', (req, res) => {getController(req, res, )});
// routesSetters.setGetRouters(router, '/api/candidates', (req, res) => {getController(req, res, )});
// routesSetters.setGetRouters(router, '/api/candidates/{id}', (req, res) => {getController(req, res, )});

//post routers

routesSetters.setPostRouters(router, '/api/employees', (req, res) => {postController(req, res, registerEmployee)});

// routesSetters.setPostRouters(router, '/api/login/employees', (req, res) => {postController(req, res, )});
// routesSetters.setPostRouters(router, '/api/login/candidates', (req, res) => {postController(req, res, )});
// routesSetters.setPostRouters(router, '/api/jobs', (req, res) => {postController(req, res, )});

routesSetters.setPostRouters(router, '/api/candidates', (req, res) => {postController(req, res, createCandidate)});

//put routers

routesSetters.setPutRouters(router, '/api/employees/{id}', (req, res) => {putController(req, res, updateEmployee)});

// routesSetters.setPutRouters(router, '/api/jobs/{id}', (req, res) => {putController(req, res, )});
// routesSetters.setPutRouters(router, '/api/candidates/{id}', (req, res) => {putController(req, res, )});

//delete routers

routesSetters.setDeleteRouters(router, '/api/employees/{id}', (req, res) => {deleteController(req, res,deleteEmployee )});

// routesSetters.setDeleteRouters(router, '/api/jobs/{id}', (req, res) => {deleteController(req, res, )});
// routesSetters.setDeleteRouters(router, '/api/candidates/{id}', (req, res) => {deleteController(req, res, )});

module.exports = router;

//MAPEAMENTO DE ROTAS

// FUNCIONÁRIOS:
// POST /api/employees
// GET /api/employees
// PUT /api/employees/{id}
// PATCH /api/employees/{id}
// GET /api/employees/{id}
// DELETE /api/employees/{id}

// DADOS DE DIVERSIDADE:
// GET /api/data-analysis/employees
// GET /api/data-analysis/candidates

// AUTENTICAÇÃO:
// POST /api/login/employees
// POST /api/login/candidates

// CADASTRO DE VAGAS:
// POST /api/jobs
// GET /api/jobs
// PUT /api/jobs/{id}
// PATCH /api/jobs/{id}
// GET /api/jobs/{id}
// DELETE /api/jobs/{id}

// CADASTRO DE CANDIDATOS:
// POST /api/candidates
// GET /api/candidates
// PUT /api/candidates/{id}
// PATCH /api/candidates/{id}
// GET /api/candidates/{id}
// DELETE /api/candidates/{id}

