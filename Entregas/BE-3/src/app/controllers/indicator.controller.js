import { User } from '../../infra/db/sequelize/models/index.js';

class IndicatorController {
    static async countByGroup(req, res) {
        try {
            let count = 0;
            const employees = await User.findAll();
            const groupToCount = req.params.name;

            if (!groupToCount) {
                return res
                    .status(400)
                    .json({ message: 'Invalid requisition!' });
            }

            employees.map(employee => {
                if (employee[groupToCount]) {
                    count++;
                }
            });

            res.status(200).json({ [groupToCount]: count });
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    static async getAllGroups(req, res) {
        const allGroups = {
            gender: 0,
            ethnicity: 0,
            sexual_orientation: 0,
            pcd: 0,
            over_60: 0,
        };

        const employees = await User.findAll();

        try {
            employees.forEach(employee => {
                for (const key in allGroups) {
                    if (
                        Object.hasOwnProperty.call(employee.dataValues, key) &&
                        employee.dataValues[key]
                    ) {
                        allGroups[key] = allGroups[key] + 1;
                    }
                }
            });

            res.status(200).json(allGroups);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export default IndicatorController;
