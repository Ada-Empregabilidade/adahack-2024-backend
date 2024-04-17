import { employeeService } from '../services/EmployeeService.js';

class EmployeeController {
    async updateProfile(req, res, next) {
        try {
            const data = req.body;
            console.log(data);
            await employeeService.execute(data);
            res.status(201).json({ message: 'Profile updated!' });
        } catch (error) {
            return res.status(404).json({ message: error.message });
        }
    }
}

export const employeeController = new EmployeeController();
