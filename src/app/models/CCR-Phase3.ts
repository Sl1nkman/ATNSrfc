//Created by Blaine Viljoen 28023374

export interface CCRPhase3 {
    schedRegressionDate: Date;
    tcbEvalStart: Date;
    tcbEvalEnd: Date;
    implementorName: string;
    implementationSuccessful: boolean;
    abort: boolean;
    regress: boolean;
    abortRegressReason: string;
    impSuccessReason: string;
    alreadyRegressed: boolean;
    additionalDocs: boolean;
    itemsUpdated: boolean;
    evalSuccess: boolean;
    ccrConfirmation: boolean;
    evalFailure: string;
}

//Created by Blaine Viljoen 28023374
