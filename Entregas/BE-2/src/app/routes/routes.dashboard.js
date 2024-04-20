const express = require("express");
const errorHandlerMiddleware = require("../middlewares/ErrorHandlerMiddleware");
const rateLimit = require("express-rate-limit");
const dashboardController = require("../controllers/DashboardController");
const autenticacaoMiddleware = require("../middlewares/AutenticacaoMiddleware");
const middlewareNivel_2 = require("../middlewares/MiddlewareNivel_2");
const middlewareNivel_4 = require("../middlewares/MiddlewareNivel_4");

const requestLimiter = rateLimit({
    windowMs: 1 * 60 * 1000,
    max: 5,
    message: {mensagem: "ATENÇÃO! Você atingiu seu limite de requisições a essa rota. Tente novamente mais tarde"}
})

const routesDashboard = express.Router();

// EXEMPLO: http://localhost:3000/v1/dashboard?etnia=branca&orientacao_sexual=homossexual

routesDashboard.get("/dashboard", requestLimiter, autenticacaoMiddleware.execute, middlewareNivel_2.execute, dashboardController.carregar);
routesDashboard.get("/dashboard/funcionarios", requestLimiter, autenticacaoMiddleware.execute, middlewareNivel_2.execute, dashboardController.carregar_funcionarios);
routesDashboard.get("/dashboard/report/:consulta", requestLimiter, autenticacaoMiddleware.execute, middlewareNivel_4.execute, dashboardController.donuts);
routesDashboard.get("/dashboard/relatorio_pcd/:consulta", requestLimiter, autenticacaoMiddleware.execute, middlewareNivel_4.execute, dashboardController.relatorio_pcd);
routesDashboard.get("/dashboard/relatorio_pcd_vs_nao_pcd/:consulta", requestLimiter, autenticacaoMiddleware.execute, middlewareNivel_4.execute, dashboardController.relatorio_pcd_vs_nao_pcd);
routesDashboard.get("/dashboard/relacao_pcd/:consulta", requestLimiter, autenticacaoMiddleware.execute, middlewareNivel_4.execute, dashboardController.relacao_pcd);

routesDashboard.use(errorHandlerMiddleware.execute)
module.exports = routesDashboard;