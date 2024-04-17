const Candidate = require('../../config/db/models/candidate');


async function updateCandidate(candidateId, candidateData) {
    try {
        const affectedRows = await Candidate.update(candidateData, {
            where: { id: candidateId }
        });
        return affectedRows; 
    } catch (error) {
        throw new Error("Erro ao atualizar dados do candidatos: " + error.message);
    }
}

async function deleteCandidate(candidateId) {
    try {
        const affectedRows = await Candidate.destroy({
            where: { id: candidateId }
        });
        return affectedRows; 
    } catch (error) {
        throw new Error("Erro ao excluir candidatos: " + error.message);
    }
}

async function getAllCandidates() {
    try {
        const candidate = await Candidate.findAll();
        return candidate;
    } catch (error) {
        throw new Error("Erro ao obter candidatos do banco de dados: " + error.message);
    }
}

async function getCandidateById(candidateId) {
    try {
        const candidate = await Candidate.findByPk(candidateId);
        return candidate || null;
    } catch (error) {
        throw new Error("Erro ao obter candidatos por ID do banco de dados: " + error.message);
    }
}

module.exports = {

    updateCandidate,
    deleteCandidate,
    getAllCandidates,
    getCandidateById,

}