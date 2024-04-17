const Jobs = require('../../config/db/models/job'); 

async function getAllJobs() {
    try {
        const jobs = await Jobs.findAll();
        return jobs;
    } catch (error) {
        throw new Error("Erro ao obter vagas do banco de dados: " + error.message);
    }
}

async function getJobsById(jobsId) {
    try {
        const jobs = await Jobs.findByPk(jobsId);
        return jobs || null;
    } catch (error) {
        throw new Error("Erro ao obter vagas por ID do banco de dados: " + error.message);
    }
}

module.exports = {
    getAllJobs,
    getJobsById
};