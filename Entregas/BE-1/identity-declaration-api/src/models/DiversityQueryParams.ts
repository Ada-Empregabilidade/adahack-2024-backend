import { AgeGroup } from "../enums/AgeGroupCode";
import { Disability } from "../enums/DesabilityGroupCode";
import { Ethnicity } from "../enums/EthnicityGroupCode";
import { Gender } from "../enums/GenderGroupCode";

export interface DiversityQueryParams {
    ageGroup?: AgeGroup;
    gender?: Gender;
    ethnicity?: Ethnicity;
    disability?: Disability;
    lgbtqia?: boolean;
    parent?: boolean;
    isInternalResponse?: boolean;
}
