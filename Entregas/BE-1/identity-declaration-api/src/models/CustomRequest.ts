import { Request } from 'express';
import { DiversityQueryParams } from '../models/DiversityQueryParams';
import { Gender } from '../enums/GenderGroupCode';
import { AgeGroup } from '../enums/AgeGroupCode';
import { Ethnicity } from '../enums/EthnicityGroupCode';
import { Disability } from '../enums/DesabilityGroupCode';

export interface CustomRequest extends Request {
    parsedQuery: {
        lgbtqia?: boolean | null | undefined;
        parent?: boolean | null | undefined;
        isInternalResponse?: boolean | null | undefined
        genderCode?: Gender | undefined;
        ageGroupCode?: AgeGroup | undefined;
        ethnicityCode?: Ethnicity | undefined;
        disabilityCode?: Disability | undefined;
    };
    diversityQueryParams?: DiversityQueryParams;
}