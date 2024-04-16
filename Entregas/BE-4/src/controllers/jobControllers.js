const Job = require('../db/models/job');

const getAll = async (req, res) => {
  try {
    const jobs = await Job.findAll();
    return res.status(200).json(jobs);
  } catch (error) {
    throw new Error(`Erro ao buscar vagas no banco de dados: ${error.message}`);
  }
};

const getOne = async (req, res) => {
  const jobId = req.params.id;

  try {
    const job = await Job.findByPk(jobId);
    if (!job) {
      return res.status(404).json({ error: 'Vaga não encontrada' });
    }

    return res.status(200).json(job);
  } catch (error) {
    throw new Error(`Erro ao buscar vaga no banco de dados: ${error.message}`);
  }
}

const create = async (req, res) => {
  try {
    const newJob = await Job.create(req.body);
    return res.status(201).json(newJob);
  } catch (error) {
    throw new Error(`Erro ao inserir vagas: ${error.message}`)
  }
}

const update = async (req, res) => {
  const jobId = req.params.id;
  const newData = req.body;

  try {
    const job = await Job.findByPk(jobId);

    if (!job) {
      return res.status(404).json({ error: 'Vaga não encontrada' });
    }

    await job.update(newData);
    return res.status(200).json(job);
  } catch (error) {
    throw new Error(`Erro ao atualizar vaga no banco de dados: ${error.message}`);
  }
}

const deleteOne = async (req, res) => {
  const jobId = req.params.id;

  try {
    const job = await Job.findByPk(jobId);

    if (!job) {
      return res.status(404).json({ error: 'Vaga não encontrada' });
    }

    await job.destroy();
    return res.status(204).send();
  } catch (error) {
    throw new Error(`Erro ao excluir vaga do banco de dados: ${error.message}`);
  }
}

module.exports = { getAll, getOne, create, update, deleteOne };