const Candidate = require('../../config/db/models/candidate');


async function updateCandidate(candidateId, candidateData) {
    try {
        const affectedRows = await Candidate.update(candidateData, {

        throw new Error("Erro ao excluir candidato: " + error.message);

    } catch (error) {

        throw new Error("Erro ao atualizar dados do candidato: " + error.message);
}

async function deleteCandidate(candidateId) {
    try {
        const affectedRows = await Candidate.destroy({

            where: { id: candidateId }
        });
        return affectedRows; 
    } catch (error) {

        throw new Error("Erro ao deletar dados do candidato: " + error.message);

module.exports = {

    updateCandidate,
    deleteCandidate

}