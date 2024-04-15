import models from "../../infra/db/sequelize/models/index.js";
// import { User } from '../../infra/db/sequelize/models/index.js';

class ManagerController {
  async listAllEmployees(req, res) {
    try {
      const employees = await models.User.findAll();
      return res.status(200).json(employees);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async crateEmployee(req, res) {
    const newEmployee = req.body;
    try {
      const createdEmployee = await models.User.create(newEmployee);
      return res.status(201).json(createdEmployee);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async deleteEmployee(req, res) {
    const { id } = req.params;
    try {
      await models.User.destroy({
        where: {
          id: id,
        },
      });
      return res.status(200).json({ message: `User with id ${id} deleted` });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
export default ManagerController;
