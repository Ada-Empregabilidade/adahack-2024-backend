import { User } from '../../infra/db/sequelize/models/index.js';

class Admin {
    static create = async (req, res) => {
        const { email } = req.body;
        const data = { email, user_type: 'manager' };

        if (!email || req.body == undefined) {
            return res.status(400).json({ message: 'Invalid e-mail!' });
        }
        // Email unique validation
        const emailValidation = await User.findOne({ where: { email: email } });
        if (emailValidation) {
            return res
                .status(400)
                .json({ message: 'E-mail already registered!' });
        }

        await User.create(data, {
            fields: ['email', 'user_type'],
        })
            .then(data => {
                res.status(201).json({ message: 'User created!', id: data.id });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message ||
                        'Some error occurred while creating resource.',
                });
            });
    };
}

export default Admin;
