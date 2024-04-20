import fs from 'fs';
import path from 'path';
import { Question } from '../models/Question';
import { SubmissionData } from '../models/SubmissionData';
import { IDiversityRepository } from '../contracts/IDiversityRepository';
import { DiversityQueryParams } from '../models/DiversityQueryParams';
import { PrismaClient } from '@prisma/client/extension';
import { convertStringToBooleanOrNull } from '../utils/ConverterRequestParams';

class DiversityRepository implements IDiversityRepository {
    private filePath = path.join(__dirname, '../../resources/questions.json');
    private prisma = PrismaClient;

    constructor(prismaClient: PrismaClient) {
        this.prisma = prismaClient;
    }



    public async getQuestions(): Promise<Question[]> {
        try {
            const data = await fs.promises.readFile(this.filePath, 'utf-8');
            const questions: Question[] = JSON.parse(data).questions;
            return questions;
        } catch (error) {
            throw new Error(`Failed to load questions: ${error}`);
        }
    }

    public async saveResponse(data: SubmissionData) {
        const ageGroup = await this.prisma.ageGroup.findUnique({
            where: { code: data.ageGroupCode }
        });

        const gender = await this.prisma.gender.findUnique({
            where: { code: data.genderCode }
        });

        const ethnicity = await this.prisma.ethnicity.findUnique({
            where: { code: data.ethnicityCode }
        });

        const disability = await this.prisma.disability.findUnique({
            where: { code: data.disabilityCode }
        });

        if (!ageGroup || !gender || !ethnicity || !disability) {
            throw new Error('One of the entities was not found.');
        }

        return this.prisma.diversityResponse.create({
            data: {
                ageGroupId: ageGroup.id,
                genderId: gender.id,
                ethnicityId: ethnicity.id,
                disabilityId: disability.id,
                lgbtqia: data.lgbtqia,
                parent: data.parent,
                isInternalResponse: data.isInternalResponse
            }
        });
    }

    public async getDiversityResponses(queryParams: DiversityQueryParams): Promise<any> {
        const conditions: any = {};

        if (queryParams.ageGroup) {
            const ageGroup = await this.prisma.ageGroup.findFirst({
                where: { code: queryParams.ageGroup }
            });
            if (ageGroup) conditions.ageGroup = { code: ageGroup.code, description: ageGroup.description };
        }

        if (queryParams.gender) {
            const gender = await this.prisma.gender.findFirst({
                where: { code: queryParams.gender }
            });
            if (gender) conditions.gender = { code: gender.code, value: gender.value };
        }

        if (queryParams.ethnicity) {
            const ethnicity = await this.prisma.ethnicity.findFirst({
                where: { code: queryParams.ethnicity }
            });
            if (ethnicity) conditions.ethnicity = { code: ethnicity.code, value: ethnicity.value };
        }

        if (queryParams.disability) {
            const disability = await this.prisma.disability.findFirst({
                where: { code: queryParams.disability }
            });
            if (disability) conditions.disability = { code: disability.code, value: disability.value };
        }

        if (queryParams.lgbtqia !== undefined) {
            conditions.lgbtqia = convertStringToBooleanOrNull(queryParams.lgbtqia as unknown as string);
        }
        if (queryParams.parent !== undefined) {
            conditions.parent = convertStringToBooleanOrNull(queryParams.parent as unknown as string);
        }
        if (queryParams.isInternalResponse !== undefined) {
            conditions.isInternalResponse = convertStringToBooleanOrNull(queryParams.isInternalResponse as unknown as string);
        }

        const responses = await this.prisma.diversityResponse.findMany({
            where: conditions,
            select: {
                ageGroup: true,
                gender: true,
                ethnicity: true,
                disability: true,
                lgbtqia: true,
                parent: true,
                isInternalResponse: true,
                createdAt: true
            }
        });
        return responses;
    }

    public async getDiversityStats(queryParams: DiversityQueryParams): Promise<any> {
        const conditions: any = {};

        const queriesUsed: any = {};
        Object.entries(queryParams).forEach(([key, value]) => {
            if (value !== undefined) {
                queriesUsed[key] = value;
            }
        });

        if (queryParams.ageGroup) {
            const ageGroup = await this.prisma.ageGroup.findUnique({
                where: { code: queryParams.ageGroup }
            });
            if (ageGroup) conditions.ageGroupId = ageGroup.id;
        }

        if (queryParams.gender) {
            const gender = await this.prisma.gender.findUnique({
                where: { code: queryParams.gender }
            });
            if (gender) conditions.genderId = gender.id;
        }

        if (queryParams.ethnicity) {
            const ethnicity = await this.prisma.ethnicity.findUnique({
                where: { code: queryParams.ethnicity }
            });
            if (ethnicity) conditions.ethnicityId = ethnicity.id;
        }

        if (queryParams.disability) {
            const disability = await this.prisma.disability.findUnique({
                where: { code: queryParams.disability }
            });
            if (disability) conditions.disabilityId = disability.id;
        }

        if (queryParams.lgbtqia !== undefined) {
            conditions.lgbtqia = convertStringToBooleanOrNull(queryParams.lgbtqia as unknown as string);
        }
        if (queryParams.parent !== undefined) {
            conditions.parent = convertStringToBooleanOrNull(queryParams.parent as unknown as string);
        }
        if (queryParams.isInternalResponse !== undefined) {
            conditions.isInternalResponse = convertStringToBooleanOrNull(queryParams.isInternalResponse as unknown as string);
        }

        console.log("Conditions used for the query:", conditions);

        const responseCount = await this.prisma.diversityResponse.count({
            where: conditions
        });

        const totalCount = await this.prisma.diversityResponse.count({});

        const internalCount = await this.prisma.diversityResponse.count({
            where: { isInternalResponse: true }
        });

        const externalCount = await this.prisma.diversityResponse.count({
            where: { isInternalResponse: false }
        });

        return {
            queriesUsed,
            totalCount,
            responseCount,
            internalCount,
            externalCount
        };
    }
}

export { DiversityRepository };