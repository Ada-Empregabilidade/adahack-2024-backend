class AppError {
    #mensage
    #status

    constructor(mensage, status = 400) {
        this.#mensage = mensage
        this.#status = status
    }

    get mensage() {
        return this.#mensage
    }

    get status() {
        return this.#status
    }
}

module.exports = AppError