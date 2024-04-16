const express = require('express');
const router = express.Router();

const db = require('../db/db.sync')
const service = require('../services/services')

//router.get('/', (_, res) => {
//  return res.status(200).json({ message: 'Tudo ok' });
// })

router.post('/api/cadastro/funcionarios', async (req, res) => {
    try {
        const employee = req.body;
        const employeeData  = await service.registerEmployees(db, employeeData);
        res.status(200).json({message: "Funcionário cadastrado com sucesso", employeeData});
    } catch (error) {
        res.status(500).json({error: "Erro interno de servidor"});
    }
})




module.exports = router;