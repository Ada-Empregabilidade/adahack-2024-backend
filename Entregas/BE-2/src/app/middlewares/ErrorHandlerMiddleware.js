const AppError = require("../errors/AppError")

class ErrorHandlerMiddleware {
    execute(error, req, res, next){
        if(error){
            if (error instanceof AppError){
                res.status(error.status).send({mensagem: error.mensagem})
            } else {
                console.error(error);
                return res.status(500).send({mensagem: "Ocorreu um erro interno no servidor"})
            }
        }
        next();
    }
}

const errorHandlerMiddleware = new ErrorHandlerMiddleware();

module.exports = errorHandlerMiddleware;