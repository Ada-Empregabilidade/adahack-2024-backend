import Admin from '../../app/controllers/admin.controller.js';
import { User } from '../../infra/db/sequelize/models/index.js';

describe('Admin > create Manager', () => {
    let mockResponse;
    let req;

    beforeEach(() => {
        mockResponse = () => {
            const res = {};
            res.status = jest.fn().mockReturnValue(res);
            res.json = jest.fn().mockReturnValue(res);
            return res;
        };

        req = {
            body: {},
        };
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('Should successfully create a manager', async () => {
        req.body.email = 'test@mail.com';

        User.findOne = jest.fn().mockResolvedValue(null);
        User.create = jest.fn().mockResolvedValue({ id: 1 });

        const res = mockResponse();
        await Admin.create(req, res);

        expect(User.findOne).toHaveBeenCalledWith({
            where: { email: req.body.email },
        });
        expect(User.create).toHaveBeenCalledWith(
            { email: req.body.email, user_type: 'manager' },
            { fields: ['email', 'user_type'] },
        );
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            message: 'User created!',
            id: 1,
        });
    });

    test('Should return error 400, given invalid e-mail', async () => {
        req.body.email = ''; // E-mail inválido

        const res = mockResponse();
        await Admin.create(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ message: 'Invalid e-mail!' });
    });

    test('Should return error 400, given existing e-mail', async () => {
        req.body.email = 'existing@mail.com';

        User.findOne = jest
            .fn()
            .mockResolvedValue({ email: 'existing@mail.com' }); // Mock User.findOne para retornar um usuário existente

        const res = mockResponse();
        await Admin.create(req, res);

        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
            message: 'E-mail already registered!',
        });
    });

    test('Should return error 500, given server/DB issue', async () => {
        req.body.email = 'test@mail.com';

        User.findOne = jest.fn().mockResolvedValue(null);
        User.create = jest.fn().mockRejectedValue(new Error('Database error')); // Mock User.create para lançar um erro

        const res = mockResponse();
        await Admin.create(req, res);

        expect(res.status).toHaveBeenCalledWith(500);
        expect(res.json).toHaveBeenCalledWith({ message: 'Database error' });
    });
});
