const Candidate = require('../../config/db/models/candidate');

async function deleteCandidate(candidateId) {
    try {
        const affectedRows = await Candidate.destroy({
            where: { id: candidateId }
        });
        return affectedRows; 
    } catch (error) {
        throw new Error("Erro ao excluir funcionário: " + error.message);
    }
}

module.exports = {
    deleteCandidate
}