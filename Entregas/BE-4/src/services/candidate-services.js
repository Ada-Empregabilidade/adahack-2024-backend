const { where } = require('sequelize');
const Candidate = require('../../config/db/models/candidate');

const userExists = async (email) => {
    try {
        const user = await Candidate.findOne({ where: { email } });
        if (!user) {
            return false
        }
        return true
    } catch (error) {
        throw new Error("Erro interno do servidor" + error.message)
    }
}

const createCandidate = async (user) => {
    try {
        const userCreated = await Candidate.create(user)
        return userCreated
    } catch (error) {
        throw new Error("Erro ao cadastrar o usuário" + error.message)
    }
}

const findCandidate = async (email) => {
    try {
        const candidate = await Candidate.findOne({ where: { email } })
        if (!candidate) {
            return false
        }
        return candidate
    } catch (error) {
        throw new Error("Erro ao cadastrar o usuário" + error.message)
    }
}

module.exports = {
    userExists,
    createCandidate,
    findCandidate
}