const jwt = require("jsonwebtoken");


class MiddlewareNivel_5 {
    async execute(req, res, next){
        const authorizationHeader = req.header("Authorization");
        const accessToken = authorizationHeader.split(" ")[1];
        const dados = jwt.decode(accessToken);
        if(dados.email === process.env.SUPERUSER && dados.senha === process.env.PASSWORD_SUPERUSER){
            next();
        }
        else if(parseInt(dados.nivel_acesso) < 5){
            res.status(403).send({mensagem: `ERRO! O usuário ${dados.nome} possui nível de acesso ${dados.nivel_acesso}. O nível de acesso mínimo para esta rota é 5`})
        } else {
            next();
        }
    }
}

const middlewareNivel_5 = new MiddlewareNivel_5();

module.exports = middlewareNivel_5;