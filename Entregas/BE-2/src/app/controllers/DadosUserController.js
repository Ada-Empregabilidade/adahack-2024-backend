const dados_usuario_logado = require("../helpers/DadosUsuarioLogado");

class DadosUserController {
    async dados_user(req, res, next){
        try {
            const authorizationHeader = req.header("Authorization");
            const accessToken = authorizationHeader.split(" ")[1];
            const user = dados_usuario_logado(accessToken);
            res.status(200).send(user)
            next();
        } catch (error) {
            next(error);
        }
    }
}

const dadosUserController = new DadosUserController();

module.exports = dadosUserController;