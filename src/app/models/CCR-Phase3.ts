

export interface CCRPhase3 {
    schedRegressionDate: Date;
    tcbEvalStart: Date;
    tcbEvalEnd: Date;
    implementorName: string;
    implementationSuccessful: boolean;
    abort: boolean;
    regress: boolean;
    abortRegress: string;
    impSuccessReason: string;
    alreadyRegressed: boolean;
    additionalDocs: boolean;
    itemsUpdated: boolean;
    evalSuccess: boolean;
    ccrConfirmation: boolean;
    evalFailure: string;
}
