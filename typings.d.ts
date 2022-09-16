







interface AuthState {
   
    accessToken: string | null;
    refreshToken: string | null;




    isSuccess: boolean;
    isError: boolean;
    isLoading: boolean;
    errorMessage: string;
    requestStatus: number;
    loginErrorMessage: string;
}