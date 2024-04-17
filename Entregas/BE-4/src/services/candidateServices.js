const Candidate = require('../../config/db/models/candidate');

async function getAllCandidates() {
    try {
        const candidate = await Candidate.findAll();
        return candidate;
    } catch (error) {
        throw new Error("Erro ao obter funcionários do banco de dados: " + error.message);
    }
}

module.exports = {
    getAllCandidates,
}