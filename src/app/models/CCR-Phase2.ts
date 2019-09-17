/* Created by : Liam Gordon McCabe
*  Student number: 27455211
*/
export interface CCRPhase2 {
    TCB_CRF_ID: string;
    requestPriority: string;
    predictedImpact: String [];
    changePeriod: string;
    temporaryPeriodStartDate: Date;
    temporaryPeriodNumberOfDays: number;
    temporaryPeriodEndDate: Date;
    natureOfChange: string;
    eosSystem: string;
    configurationItems: string;
    change: {
        hardware: boolean,
        software: boolean,
        firmware: boolean
    };
    additionalDocuments: boolean;
    numberOfPages: number;
    estimatedImpacts: {
        operations: string,
        clients: string,
        technical: string
    };
    problemReportRaised: boolean;
    problemReportRef: string;
    changeSuccessfullyTested: string;
    changeNotSuccessfullyTestedReason: string;
    specialistComment: string;
    proposedImplementationDate: Date;
    recommend_oppose: {};
}
