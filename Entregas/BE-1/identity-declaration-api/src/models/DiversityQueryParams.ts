import { AgeGroup } from "../enums/AgeGroupCode";
import { Disability } from "../enums/DesabilityGroupCode";
import { Ethnicity } from "../enums/EthnicityGroupCode";
import { Gender } from "../enums/GenderGroupCode";

export interface DiversityQueryParams {
    ageGroupCode?: AgeGroup;
    genderCode?: Gender;
    ethnicityCode?: Ethnicity;
    disabilityCode?: Disability;
    lgbtqia?: boolean;
    parent?: boolean;
    isInternalResponse?: boolean;
}
