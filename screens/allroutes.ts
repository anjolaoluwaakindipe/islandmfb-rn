export type RootStackParamList = {
    GettingStarted: undefined,
    LetsGetStarted: undefined,
    SetProfile:undefined,
    Verification: undefined;
    CreateYourAccount: undefined;
    PersonalInfo: undefined;
    Success: {successMessage:string, nextPage:keyof RootStackParamList, canGoBack:boolean, successButtonText:string, nextPageParams?: any} | undefined;

}