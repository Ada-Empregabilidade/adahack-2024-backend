import { employeeRepository } from "../../infra/db/sequelize/repositories/EmployeeRepository.js";

class EmployeeService {
    async execute(data) {
        const update = await employeeRepository.registrationUpdate(data)

        if(!update) throw new Error({message: "User not found"})
    }
}

export const employeeService = new EmployeeService()