const jwt = require("jsonwebtoken");

function dados_usuario_logado(token){
    return jwt.decode(token);
}

module.exports = dados_usuario_logado;