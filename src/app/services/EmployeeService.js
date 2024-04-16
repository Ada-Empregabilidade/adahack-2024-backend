const employeeRepository = require("../../infra/db/sequelize/repositories/EmployeeRepository");

class EmployeeService {
    async execute(data) {
        const update = await employeeRepository.registrationUpdate(data)

        if(!update) throw new Error({message: "User not found"})
    }
}

const employeeService = new EmployeeService()

module.exports = employeeService