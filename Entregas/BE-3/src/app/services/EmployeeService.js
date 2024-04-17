import { employeeRepository } from '../../infra/db/sequelize/repositories/EmployeeRepository.js';

class EmployeeService {
    async execute(data) {
        const update = await employeeRepository.registrationUpdate(data);
        console.log('update', update[0]);
        if (update[0] == 0) throw new Error('User not found');
    }
}

export const employeeService = new EmployeeService();
