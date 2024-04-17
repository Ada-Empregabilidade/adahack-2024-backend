const Candidate = require('../../config/db/models/candidate');

async function updateCandidate(candidateId, candidateData) {
    try {
        const affectedRows = await Candidate.update(candidateData, {
            where: { id: candidateId }
        });
        return affectedRows; 
    } catch (error) {
        throw new Error("Erro ao atualizar dados do funcionário: " + error.message);
    }
}

module.exports = {
    updateCandidate,
}