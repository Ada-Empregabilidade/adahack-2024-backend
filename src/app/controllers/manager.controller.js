// import User from '../../infra/db/sequelize/models/index.js';
import User from '../../infra/db/sequelize/models/user.model.js';


class gestor {
    static async listAllEmployees(req, res) {
        try {
            const employees = await User.findAll();
            return res.status(200).json(employees);
        } catch (error) {
            return res.status(500).json(error.message);
        }
    }

    static async crateEmployee(req, res) {
        const newEmployee = req.body;
        try {
          const createdEmployee = await User.create(newEmployee);
          return res.status(201).json(createdEmployee);
        } catch (error) {
            return res.status(500).json(error.message);
      }
  }

       
  }
export default gestor;