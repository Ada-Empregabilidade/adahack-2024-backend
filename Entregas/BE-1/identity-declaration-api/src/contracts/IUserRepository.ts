import { User } from "@prisma/client";
import { CreateUserRequest } from "../models/CreateUserRequest";
import { UserResponse } from "../models/UserReponse";


export interface IUserRepository {
    create(user: CreateUserRequest): Promise<UserResponse>;
    findByEmail(email: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    comparePassword(userPassword: string, candidatePassword: string): Promise<boolean>;
}