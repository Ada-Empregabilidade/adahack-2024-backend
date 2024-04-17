const dados_usuario_logado = require("../helpers/DadosUsuarioLogado");
const cadastrarCandidatoService = require("../services/CadastrarCandidatoService");
const contratarCandidatoService = require("../services/ContratarCandidatoService");
const desligarCandidatoService = require("../services/DesligarCandidatoService");
const listarCandidatosPcdService = require("../services/ListarCandidatosPcdService");
const listarCandidatosService = require("../services/ListarCandidatosService");
const loginService = require("../services/LoginService");

class CandidatoController {
    async cadastrar(req, res, next){
        const {nome, cpf, email, senha, data_nascimento, etnia, identidade_genero, orientacao_sexual, pcd} = req.body;
        try {
            const novoCandidato = await cadastrarCandidatoService.execute(nome, cpf, email, senha, data_nascimento, etnia, identidade_genero, orientacao_sexual, pcd);
            res.status(201).send(novoCandidato)
            next();
        } catch (error) {
            next(error);
        }
    }

    async listar(req, res, next){
        try {
            const {pagina, funcionario} = req.query;
            const candidatos = await listarCandidatosService.execute(pagina, funcionario);
            res.status(200).send(candidatos);
            next();
        } catch (error) {
            next(error);
        }
    }

    async listar_candidatos_pcd(req, res, next){
        try {
            const {funcionario, pagina} = req.query;
            const candidatos = await listarCandidatosPcdService.execute(funcionario, pagina);
            res.status(200).send(candidatos);
            next();
        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next){
        try {
            const {email, senha} = req.body;
            const resposta = await loginService.execute(email, senha);
            res.send(resposta);
            next();
        } catch (error) {
            next(error);
        }
    }

    async contratar(req, res, next){
        try {
            const {data_contratacao, nivel_acesso} = req.body;
            const {id_candidato} = req.params;
            const authorizationHeader = req.header("Authorization");
            const accessToken = authorizationHeader.split(" ")[1];
            const usuario = dados_usuario_logado(accessToken);
            const candidatoContratado = await contratarCandidatoService.execute(id_candidato, data_contratacao, usuario, nivel_acesso);
            res.status(200).send(candidatoContratado);
            next();
        } catch (error) {
            next(error);
        }
    }

    async desligar(req, res, next){
        try {
            const {data_demissao} = req.body;
            const {id_candidato} = req.params;
            const authorizationHeader = req.header("Authorization");
            const accessToken = authorizationHeader.split(" ")[1];
            const usuario = dados_usuario_logado(accessToken);
            const candidatoDesligado = await desligarCandidatoService.execute(id_candidato, data_demissao, usuario);
            res.status(200).send(candidatoDesligado);
            next();
        } catch (error) {
            next(error);
        }
    }
}

const candidatoController = new CandidatoController();

module.exports = candidatoController;