export interface SubmissionData {
    ageGroupCode: string;
    genderCode: string;
    ethnicityCode: string;
    disabilityCode: string;
    lgbtqia: boolean | null;
    parent: boolean | null;
    isInternalResponse?: boolean;
}