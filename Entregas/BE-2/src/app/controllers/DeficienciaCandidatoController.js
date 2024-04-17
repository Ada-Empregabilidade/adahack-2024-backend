const cadastrarDeficienciaCandidatoService = require("../services/CadastrarDeficienciaCandidatoService");
const listarDeficienciasPorCandidatoService = require("../services/ListarDeficienciasPorCandidatoService");
const dados_usuario_logado = require("../helpers/DadosUsuarioLogado")

class DeficienciaCandidatoController {
    async cadastrar(req, res, next){
        const {tipo_deficiencia, descricao, cid} = req.body;
        try {
            const authorizationHeader = req.header("Authorization");
            const accessToken = authorizationHeader.split(" ")[1];
            const usuario = dados_usuario_logado(accessToken);
            const deficienciaCandidato = await cadastrarDeficienciaCandidatoService.execute(tipo_deficiencia, descricao, cid, usuario);
            res.status(201).send(deficienciaCandidato)
            next();
        } catch (error) {
            next(error);
        }
    }

    async buscar_por_candidato(req, res, next){
        const {id_candidato} = req.params
        try {
            const deficienciasCandidato = await listarDeficienciasPorCandidatoService.execute(id_candidato);
            return res.status(200).send(deficienciasCandidato);
            //next();
        } catch (error) {
            next(error);
        }
    }
}

const deficienciaCandidatoController = new DeficienciaCandidatoController();

module.exports = deficienciaCandidatoController;