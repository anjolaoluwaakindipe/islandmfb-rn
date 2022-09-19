
interface UserResponse {
    sub: string;
    email_verified: boolean;
    name: string;
    preferred_username: string;
    given_name: string;
    family_name: string;
    email: string;
}



interface UserInfoAppResponse {
    customerNo: string | null;
    name: string | null;
    firstName: string | null;
    lastName: string | null;
    otherName: string | null;
    maritalStatus: string | null;
    dob: string | null;
    gender: string | null;
    phoneRef: string | null;
    email: string | null;
    bvn: string | null;
    address: string | null;
}





interface AuthState {

    accessToken: string | null;
    refreshToken: string | null;
    user: {
        title: string | null,
        firstName: string | null,
        lastName: string | null,
        gender: string | null,
        name: string|null,
        customerNo: string | null;
        email: string | null;
    } | null;



    isSuccess: boolean;
    isError: boolean;
    isLoading: boolean;
    errorMessage: string;
    requestStatus: number;
    loginErrorMessage: string;
}