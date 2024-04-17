const Jobs = require('../../config/db/models/job'); 

async function getAllJobs() {
    try {
        const jobs = await Jobs.findAll();
        return jobs;
    } catch (error) {
        throw new Error("Erro ao obter vagas do banco de dados: " + error.message);
    }
}

module.exports = {
    getAllJobs
};