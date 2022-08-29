export type RootStackParamList = {
    GettingStarted: undefined,
    SignIn:undefined,
    LetsGetStarted: undefined,
    SetProfile:undefined,
    Verification: undefined;
    Success: { successMessage: string, nextPage: keyof RootStackParamList, canGoBack: boolean, successButtonText: string, nextPageParams?: any } | undefined;
    

}