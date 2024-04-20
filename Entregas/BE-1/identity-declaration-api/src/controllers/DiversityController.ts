import { Request, Response } from 'express';
import { SubmissionData } from '../models/SubmissionData';
import { IDiversityService } from '../contracts/IDiversityService';
import logger from '../utils/logger';
import { DiversityQueryParams } from '../models/DiversityQueryParams';

class DiversityController {
    private diversityService: IDiversityService;

    constructor(diversityService: IDiversityService) {
        this.diversityService = diversityService;
    }

    public async getQuestions(req: Request, res: Response) {
        try {
            const questions = await this.diversityService.getQuestions();
            res.json({ questions });
        } catch (error) {
            logger.error("Error fetching questions: %s", error);
            res.status(500).send('Error retrieving questions.');
        }
    }

    public async submitResponse(req: Request, res: Response) {
        try {
            const data: SubmissionData = req.body.responses;
            console.log("Body recebido: ", data);
            await this.diversityService.submitResponse(data);
            res.json({
                status: 'success',
                message: 'Responses submitted successfully.'
            });
        } catch (error) {
            logger.error("Error submitting responses: %s", error);
            res.status(500).send('Internal server error.');
        }
    }

    public async getDiversityResponses(req: Request, res: Response) {
        try {
            const queryParams: DiversityQueryParams = req.query;
            console.log("Query recebidas: ", queryParams);
            const responses = await this.diversityService.getDiversityResponses(queryParams);
            res.json({ responses });
        } catch (error) {
            logger.error("Error fetching diversity responses: %s", error);
            res.status(500).send('Error retrieving diversity responses.');
        }
    }

    public async getDiversityStats(req: Request, res: Response) {
        try {
            const queryParams: DiversityQueryParams = req.query;
            const responses = await this.diversityService.getDiversityStats(queryParams);
            res.json({ responses });
        } catch (error) {
            if (error instanceof Error) {
                logger.error("Error fetching diversity responses: %s", error);
                logger.error(error.stack);
                res.status(500).send('Error retrieving diversity responses.');
            }

        }
    }
}

export { DiversityController };
