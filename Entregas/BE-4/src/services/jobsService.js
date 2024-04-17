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
        const job = await Jobs.findByPk(jobsId);
        return job || null;
    } catch (error) {
        throw new Error("Erro ao obter vagas por ID do banco de dados: " + error.message);
    }
}

async function registerJobs(jobsData) {
    try {
        const job = await Jobs.create(jobsData);
        return job;       
    } catch (error) {
        throw new Error("Erro ao cadastrar o vagas: " + error.message);
    }
}

async function updateJobs(jobsId, jobsData) {
    try {
        const affectedRows = await Jobs.update(jobsData, {
            where: { id: jobsId }
        });
        return affectedRows; 
    } catch (error) {
        throw new Error("Erro ao atualizar dados do vagas: " + error.message);
    }
}

async function deleteJobs(jobsId) {
    try {
        const affectedRows = await Jobs.destroy({
            where: { id: jobsId }
        });
        return affectedRows; 
    } catch (error) {
        throw new Error("Erro ao excluir vagas: " + error.message);
    }
}

module.exports = {
    getAllJobs,
    getJobsById,
    registerJobs,
    updateJobs,
    deleteJobs
};