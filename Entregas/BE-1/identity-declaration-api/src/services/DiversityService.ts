import { IDiversityService } from '../contracts/IDiversityService';
import { DiversityQueryParams } from '../models/DiversityQueryParams';
import { SubmissionData } from '../models/SubmissionData';
import { IDiversityRepository } from '../contracts/IDiversityRepository';

class DiversityService implements IDiversityService {

    constructor(private diversityRepository: IDiversityRepository) { }

    async getQuestions() {
        return this.diversityRepository.getQuestions();
    }

    async submitResponse(data: SubmissionData) {
        return this.diversityRepository.saveResponse(data);
    }

    async getDiversityResponses(queryParams: DiversityQueryParams) {
        return this.diversityRepository.getDiversityResponses(queryParams);
    }

    async getDiversityStats(queryParams: DiversityQueryParams) {
        return this.diversityRepository.getDiversityStats(queryParams);
    }
}

export { DiversityService };