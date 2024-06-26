const Employee = require('../../config/db/models/employee'); 


const employeeExists = async (email, password) => {
    try {
        const employee = await employee.findOne({ where: { email, password } });
        if (!employee) {
            return false
        }
        return true
    } catch (error) {
        throw new Error("Erro interno do servidor" + error.message)
    }
}



async function getAllEmployees() {
    try {
        const employees = await Employee.findAll();
        return employees;
    } catch (error) {
        throw new Error("Erro ao obter funcionários do banco de dados: " + error.message);
    }
}

async function getEmployeeById(employeeId) {
    try {
        const employee = await Employee.findByPk(employeeId);
        return employee || null;
    } catch (error) {
        throw new Error("Erro ao obter funcionário por ID do banco de dados: " + error.message);
    }
}

async function registerEmployee(employeeData) {
    try {
        const employee = await Employee.create(employeeData);
        return employee;       
    } catch (error) {
        throw new Error("Erro ao cadastrar o funcionário: " + error.message);
    }
}

async function updateEmployee(employeeId, employeeData) {
    try {
        const affectedRows = await Employee.update(employeeData, {
            where: { id: employeeId }
        });
        return affectedRows; 
    } catch (error) {
        throw new Error("Erro ao atualizar dados do funcionário: " + error.message);
    }
}

async function deleteEmployee(employeeId) {
    try {
        const affectedRows = await Employee.destroy({
            where: { id: employeeId }
        });
        return affectedRows; 
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
    employeeExists
};