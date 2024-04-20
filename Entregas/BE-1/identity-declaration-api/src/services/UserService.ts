import { CreateUserRequest } from "../models/CreateUserRequest";
import { UserResponse } from "../models/UserReponse";
import { IUserService } from "../contracts/IUserService";
import { IUserRepository } from "../contracts/IUserRepository";

class UserService implements IUserService {

    constructor(private userRepository: IUserRepository){}

    async create(user: CreateUserRequest): Promise<UserResponse> {
        const userReponse = await this.findByEmail(user.email);

        if (userReponse) {
            throw new Error('User already exists!')
        }

        const newUser = await this.userRepository.create(user);
        return newUser
    }

    async findByEmail(email: string): Promise<UserResponse> {
        const user = await this.userRepository.findByEmail(email)
        if(!user){
            throw new Error("User not found");
        }
        return user;        
    }

    async findAll() {
        const users = await this.userRepository.findAll();
        return users
    }
}


export { UserService }