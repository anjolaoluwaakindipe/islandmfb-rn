
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

interface UserFull {
    user:
    [
        {
        primaryAccountNo: [Object]| null;
        accountNos: [Array]|null;
        customerNo: string | null;
        customerName: string | null;
        accountName: string | null;
        productCode: string | null;
        product: string | null;
        ledgerCode: string | null;
        ledger: string | null;
        ccy: string | null;
        ccyCode: null;
        ccyName: string | null;
        lastMovementDate: string | null;
        availableBalance: number | null;
        clearedBalance: number | null;
        bookBalance: number | null
    },
        {
            primaryAccountNo: [Object]|null;
            accountNos: [Array]|null;
            customerNo: string | null;
            customerName: string | null;
            accountName: string | null;
            productCode: string | null;
            product: string | null;
            ledgerCode: string | null;
            ledger: string | null;
            ccy: string | null;
            ccyCode: null;
            ccyName: string | null;
            lastMovementDate: string | null;
            availableBalance: number | null;
            clearedBalance: number | null;
            bookBalance: number | null
        },

        {
            primaryAccountNo: [Object]|null;
            accountNos: [Array]|null;
            customerNo: string | null;
            customerName: string | null;
            accountName: string | null;
            productCode: string | null;
            product: string | null;
            ledgerCode: string | null;
            ledger: string | null;
            ccy: string | null;
            ccyCode: null;
            ccyName: string | null;
            lastMovementDate: string | null;
            availableBalance:number | null;
            clearedBalance: number | null;
            bookBalance: number | null
        },
    ]
}



interface AuthState {

    accessToken: string | null;
    refreshToken: string | null;
    user: {
        name: string | null;
        customerNo: string | null;
    } ;



    isSuccess: boolean;
    isError: boolean;
    isLoading: boolean;
    errorMessage: string;
    requestStatus: number;
    loginErrorMessage: string;
}