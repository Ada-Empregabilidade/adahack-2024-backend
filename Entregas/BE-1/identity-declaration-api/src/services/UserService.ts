import { userRepository } from "../repositories/UserRepository";
import { CreateUserRequest } from "../models/CreateUserRequest";
import { UserResponse } from "../models/UserReponse";

class UserService {
    async create(user: CreateUserRequest): Promise<UserResponse> {
        const userReponse = await this.findByEmail(user.email);

        if (userReponse) {
            throw new Error('User already exists!')
        }

        const newUser = await userRepository.create(user);
        return newUser
    }

    async findByEmail(email: string) {
        const user = await userRepository.findByEmail(email)
        return user
    }

    async findAll() {
        const users = await userRepository.findAll();
        return users
    }
}

const userService = new UserService();

export { userService }