//const db = require('../../infra/db/sequelize/models/index.js');
const User = require('../../infra/db/sequelize/models/index.js');

class admin {
    static create = async (req, res) => {
        const { email } = req.body;
        const data = { email, userType: 'manager' };

        // Email unique validation
        const emailValidation = await User.findOne({ where: { email: email } });
        if (emailValidation) {
            return res
                .status(400)
                .json({ message: 'E-mail already registered!' });
        }

        await User.create(data, {
            fields: ['email', 'userType'],
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

module.exports = admin;
