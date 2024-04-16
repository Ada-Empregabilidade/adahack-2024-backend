const database = require('../../src/db/db.sync') //nome do database apenas de exemplo. Será alterado quando for criado o definitivo

async function registerEmployees(db, employee) {
    try {
        const employeeData = await db.execute('INSERT INTO employees (name, email, department, employee_registration, gender, sexual_orientation, ethnicity, pwd) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [employee.name, employee.position, employee.department, employee.employee_registration, employee.gender, employee.sexual_orientation, employee.ethnicity, employee.pwd])
        return emplo-yeeData.insertId;       
    } catch (error) {
        throw new Error("Erro ao cadastrar o usuário" + error.message)
    }
}

module.exports = {
    registerEmployees
}