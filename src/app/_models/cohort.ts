export interface Cohort {
    id?: number;
    cohort: string;
    status: string;
    cohortName: string;
    customerName: string;
    customerSPOCName: string;
    customerSPOCEmail: string;
    capabilityLeadName: string;
    capabilityLeadEmail: string;
    headcount: number;
    buffer: number;
    salaryRate: number;
    billingRate: number;
    purchasePrice: number;
    sellPrice: number;
    trainingCost: number;
    targetDeploymentDate: string;
    proposedStartDate: string;
    trainingDate: string;
    trainingDuration: number;
    coach: string;
    mentor: string;
    trainer: string;
    issueNotes: string;
}