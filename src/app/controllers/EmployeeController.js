const employeeService = require("../services/EmployeeService")

class EmployeeController {
    async updateProfile(req, res, next) {
        try {
            const data = req.body
            console.log(data)
            await employeeService.execute(data)
            res.status(201)
            next()
        } catch(err) {
            next(err)
        }
        
    }
}

const employeeController = new EmployeeController()

module.exports = employeeController