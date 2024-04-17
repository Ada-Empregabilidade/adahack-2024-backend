const database = require('../../src/db/db.sync') //nome do database apenas de exemplo. Será alterado quando for criado o definitivo


async function getAllEmployees(db) {
    try {
        const [employees] = await db.query('SELECT * FROM employees');
        return employees;
    } catch (error) {
        throw new Error("Erro ao obter funcionários do banco de dados: " + error.message);
    }
}

async function getEmployeeById(db, employeeId) {
    try {
        const [employee] = await db.query('SELECT * FROM employees WHERE id = ?', [employeeId]);
        return employee[0] || null; // Retorna o funcionário encontrado ou null se nenhum for encontrado
    } catch (error) {
        throw new Error("Erro ao obter funcionário por ID do banco de dados: " + error.message);
    }
}



async function registerEmployee(db, employee) {
    try {
        const employeeData = await db.execute('INSERT INTO employees (name, email, department, employee_registration, gender, sexual_orientation, ethnicity, pwd) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [employee.name, employee.position, employee.department, employee.employee_registration, employee.gender, employee.sexual_orientation, employee.ethnicity, employee.pwd])
        return employeeData.insertId;       
    } catch (error) {
        throw new Error("Erro ao cadastrar o usuário" + error.message)
    }
}

async function updateEmployee(db, employeeId, employee) {
    try {
        const employeeData = await db.execute('UPDATE employees SET name = ?, email = ?, department = ?, employee_registration = ?, gender = ?, sexual_orientation = ?, ethnicity = ?, pwd = ? WHERE id = ?',
            [employee.name, employee.email, employee.department, employee.employee_registration, employee.gender, employee.sexual_orientation, employee.ethnicity, employee.pwd, employeeId]);
        return employeeData[0].affectedRows; // Assuming your execute function returns information about the affected rows
    } catch (error) {
        throw new Error("Error updating user data: " + error.message);
    }
}

async function deleteEmployee(db, employeeId) {
    try {
        const employeeData = await db.execute('DELETE FROM employees WHERE id = ?', [employeeId]);
        return employeeData[0].affectedRows; // Retorna o número de linhas afetadas pela exclusão
    } catch (error) {
        throw new Error("Erro ao excluir funcionário: " + error.message);
    }
}

module.exports = {
    getAllEmployees,
    getEmployeeById,
    registerEmployee,
    updateEmployee,
    deleteEmployee,
}