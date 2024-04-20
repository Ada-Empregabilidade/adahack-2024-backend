import { DiversityQueryParams } from '../models/DiversityQueryParams';
import { DiversityStatistics } from '../models/DiversityStatistics';
import { Question } from '../models/Question';
import { ResponseSummary } from '../models/ResponseSummary';
import { SubmissionData } from '../models/SubmissionData';

export interface IDiversityRepository {
    getQuestions(): Promise<Question[]>;
    saveResponse(data: SubmissionData): Promise<ResponseSummary>;
    getDiversityResponses(queryParams: DiversityQueryParams): Promise<ResponseSummary>;
    getDiversityStats(queryParams: DiversityQueryParams): Promise<DiversityStatistics>;
}
