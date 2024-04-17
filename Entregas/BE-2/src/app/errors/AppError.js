class AppError {

    _mensagem;
    _status;

    constructor (mensagem, status=400){
        this._mensagem = mensagem;
        this._status = status;
    }

    
    get mensagem() {
        return this._mensagem;
    }
    
    
    get status() {
        return this._status;
    }
    
}

module.exports = AppError;