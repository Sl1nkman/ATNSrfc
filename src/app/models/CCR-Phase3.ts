// Created by Blaine Viljoen 28023374

export interface CCRPhase3 {
    CCR_ID: number;
    schedRegressionDate: Date;
    tcbEvalStart: Date;
    tcbEvalEnd: Date;
    implementationSuccessful: boolean;
    abort: boolean;
    regress: boolean;
    abortRegressReason: string;
    abortRegress: string;
    alreadyRegressed: boolean;
    additionalDocs: boolean;
    itemsUpdated: boolean;
    evalSuccess: boolean;
    ccrConfirmation: boolean;
    evalFailure: string;
    documentIds: String[];
    CSRF_token: string;
}

//Created by Blaine Viljoen 28023374
