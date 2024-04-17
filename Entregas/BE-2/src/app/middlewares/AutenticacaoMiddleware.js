const jwt = require("jsonwebtoken");
const  { JsonWebTokenError } = require("jsonwebtoken");

class AutenticacaoMiddleware {
    execute(req, res, next){
        const authorizationHeader = req.header("Authorization");
        if(!authorizationHeader){
            return res.status(400).send({mensagem: "Token não informado"});
        }
        if(!authorizationHeader.toLowerCase().startsWith("bearer ")){
            return res.status(401).send({mensagem: "Token inválido"});
        }
        const accessToken = authorizationHeader.split(" ")[1];
        try {
            const secret = process.env.JWT_SECRET;
            jwt.verify(accessToken, secret)
            next();
        } catch (error) {
            if(error instanceof JsonWebTokenError){
                return res.status(401).send({mensagem: "Token inválido"});
            }
            next(error);
        }
    }
}

const autenticacaoMiddleware = new AutenticacaoMiddleware();

module.exports = autenticacaoMiddleware;