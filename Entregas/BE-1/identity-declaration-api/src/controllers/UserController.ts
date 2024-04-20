import { Request, Response } from "express";
// import { userService } from "../services/UserService";
import { CreateUserRequest } from "../models/CreateUserRequest";
import logger from '../utils/logger';
import { IUserService } from "../contracts/IUserService";

class UserController {
    private userService: IUserService;

    constructor(userService: IUserService){
        this.userService = userService;
    }

    async create(req: Request, res: Response) {
        try {
            const { email, password } = req.body;

            const userExist = await this.userService.findByEmail(email);
            if (userExist) {
                return res.status(409).json({ message: 'User already exists!' });
            }

            const createUserRequest: CreateUserRequest = { email, password };
            const newUser = await this.userService.create(createUserRequest);

            res.status(201).json(newUser);
        } catch (error) {
            logger.error('Error creating user: %s', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async findAll(req: Request, res: Response) {
        try {
            const users = await this.userService.findAll();
            return res.status(200).send(users)
        } catch (error) {
            logger.error('Error creating user: %s', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

export { UserController };
