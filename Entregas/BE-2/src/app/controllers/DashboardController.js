const filtrarCandidatosService = require("../services/FiltrarCandidatosService");
const filtrarFuncionariosService = require("../services/FiltrarFuncionariosService");
const ListarDonutsCandidatosService = require("../services/ListarDonutsCandidatosService");
const relacaoPcdService = require("../services/RelacaoPcdService");
const relatorioPcdService = require("../services/RelatorioPcdService");
const relatorioPcdVsNaoPcdService = require("../services/RelatorioPcdVsNaoPcdService");

class DashboardController {
    async carregar(req, res, next){
        const queryParams = []
        for (const key in req.query) {
            if (req.query.hasOwnProperty(key)) {
                queryParams.push(`${key}='${req.query[key]}'`)
            }
        }
        try {
            const candidatos = await filtrarCandidatosService.execute(queryParams);
            //console.log(queryParams)
            //console.log(candidatos)
            res.status(200).send(candidatos)
        } catch (error) {
            next(error);
        }
    }

    async carregar_funcionarios(req, res, next){
        const queryParams = []
        for (const key in req.query) {
            if (req.query.hasOwnProperty(key)) {
                queryParams.push(`${key}='${req.query[key]}'`)
            }
        }
        try {
            const candidatos = await filtrarFuncionariosService.execute(queryParams);
            //console.log(queryParams)
            //console.log(candidatos)
            res.status(200).send(candidatos)
        } catch (error) {
            next(error);
        }
    }

    async donuts(req, res, next){
        const queryParams = []
        const {consulta} = req.params;
        for (const key in req.query) {
            if (req.query.hasOwnProperty(key)) {
                queryParams.push(`${key}='${req.query[key]}'`)
            }
        }
        try {
            const candidatos = await ListarDonutsCandidatosService.execute(consulta);
            //console.log(queryParams)
            //console.log(candidatos)
            res.status(200).send(candidatos)
        } catch (error) {
            next(error);
        }
    }

    async relatorio_pcd(req, res, next){
        const {consulta} = req.params;
        try {
            const candidatos = await relatorioPcdService.execute(consulta);
            res.status(200).send(candidatos)
        } catch (error) {
            next(error);
        }
    }

    async relatorio_pcd_vs_nao_pcd(req, res, next){
        const {consulta} = req.params;
        try {
            const candidatos = await relatorioPcdVsNaoPcdService.execute(consulta);
            res.status(200).send(candidatos)
        } catch (error) {
            next(error);
        }
    }

    async relacao_pcd(req, res, next){
        const {consulta} = req.params;
        try {
            const candidatos = await relacaoPcdService.execute(consulta);
            res.status(200).send(candidatos)
        } catch (error) {
            next(error);
        }
    }
}

const dashboardController = new DashboardController();

module.exports = dashboardController;