import { PrismaClient } from '@prisma/client/extension';
import { IUserRepository } from '../contracts/IUserRepository';
import { CreateUserRequest } from '../models/CreateUserRequest';
import { UserResponse } from '../models/UserReponse';
import { User } from '@prisma/client';
import { compare, hash } from 'bcrypt';

class UserRepository implements IUserRepository {
    private prisma: PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prisma = prismaClient;
    }

    async create(user: CreateUserRequest): Promise<UserResponse> {
        const email = user.email;
        const password = await hash(user.password, 10);
        const newUser = await this.prisma.user.create({
            data: {
                email,
                password
            },
            select: {
                id: true,
                email: true
            }
        });
        return newUser;
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.prisma.user.findUnique({
            where: { email }
        });
    }

    async findAll(): Promise<User[]> {
        return this.prisma.user.findMany();
    }

    async comparePassword(userPassword: string, candidatePassword: string): Promise<boolean> {
        return await compare(candidatePassword, userPassword);
    }
}

export { UserRepository };