import { CreateUserRequest } from "../models/CreateUserRequest";
import { UserResponse } from "../models/UserReponse";

export interface IUserService {
     create(user: CreateUserRequest): Promise<UserResponse>;
     findByEmail(email: string): Promise<UserResponse>;
     findAll(): Promise<UserResponse[]>;
}