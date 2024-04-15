// import models from '../../infra/db/sequelize/models/index.js';
import { User } from "../../infra/db/sequelize/models/index.js";
// import db from "../../infra/db/sequelize/models";
import dataMock from "../repositories/mocks.js";

class ManagerController {
  static async listAllEmployees(req, res) {
    try {
      const employees = await User.findAll();
      return res.status(200).json(employees);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async crateEmployee(req, res) {
    const newEmployee = req.body;
    try {
      const createdEmployee = await User.create(newEmployee);
      return res.status(201).json(createdEmployee);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async updateEmployee(req, res) {
    const { id } = req.params;
    const newData = req.body;
    try {
      await User.update(newData, {
        where: {
          id: id,
        },
      });
      const updatedEmployee = await User.findByPk(id);
      return res.status(200).json(updatedEmployee);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static async deleteEmployee(req, res) {
    const { id } = req.params;
    try {
      await User.destroy({
        where: {
          id: id,
        },
      });
      return res.status(200).json({ message: `User with id ${id} deleted` });
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  static findUserById = async (req, res) => {
    const id = req.params.id;

    try {
      // usar dados do banco - descomentar linha abaixo
      // const userData = await dataBase.User.findByPk(id);
      //ou
      //usar dados mocados
      const userData = dataMock.find((user) => user.id === id);

      if (userData) {
        res.send(userData);
      } else {
        res.status(404).send({
          message: `User not found with ${id}`,
        });
      }
    } catch (err) {
      res.status(500).send({
        message: err.message || "Error while listing resource.",
      });
    }
  };
}

export default ManagerController;
