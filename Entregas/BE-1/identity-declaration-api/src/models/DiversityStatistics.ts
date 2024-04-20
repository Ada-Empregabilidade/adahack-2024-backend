export interface DiversityStatistics {
    queriesUsed: {
        ageGroupCode?: string;
        genderCode?: string;
        ethnicityCode?: string;
        disabilityCode?: string;
        lgbtqia?: boolean;
        parent?: boolean;
        isInternalResponse?: boolean;
    };
    totalCount: number;
    responseCount: number;
    internalCount: number;
    externalCount: number;
}
