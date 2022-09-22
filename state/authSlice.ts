import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { string } from "zod"
import authRequest from "../utils/requests/authReq"
import { SecureStorage } from "../services/Singleton/secureStorage"
import { RootState } from "./store"
// import { RootState } from "./store"

const initialState: AuthState = {
    accessToken: "",
    refreshToken: "",

    user: {
        accountNo: "",
        product: "",
        name: "",
        currency: "",

        customerNo: "",
        availableBalance: 0,
        bookBalance: 0,

    },
    errorMessage: "",
    isError: false,
    isLoading: false,
    isSuccess: false,
    requestStatus: 0,
    loginErrorMessage: "",
}




//logging in a user 

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (
        { userName, password }: { userName: string; password: string },
        thunkApi
    ) => {
        try {

            const tokenResponse = await authRequest.loginwithEmail(userName, password)

            if (tokenResponse.status === 200) {
                await Promise.all(
                    [SecureStorage.getInst().save("access_token", tokenResponse.data.access_token),
                    SecureStorage.getInst().save("refresh_token", tokenResponse.data.refresh_token),
                    SecureStorage.getInst()]


                )
                console.log("connect successful ")

                //use access token to get user info 
                // const token = await SecureStorage.getInst().getValueFor("access_token")
                const userResponse = await authRequest.getUserKeyCloak(tokenResponse.data.access_token)
                console.log(userResponse.status)

                console.log("response success")
                if (userResponse.status === 200) {
                    const userInfoFullAppResponse = await authRequest.getUserFull(userResponse.data["customer_no"])

                    if (userInfoFullAppResponse.status === 200) {

                        let userInfo: UserFull = userInfoFullAppResponse.data as UserFull;
                        console.log(userInfoFullAppResponse.data[0].product)

                        return {
                            allUserInformation: userInfo,
                            product: userInfoFullAppResponse.data[0].product,
                            name: userInfoFullAppResponse.data[0].customerName,
                            accountNo: userInfoFullAppResponse.data[0].primaryAccountNo["_number"],
                            accesToken: tokenResponse.data.access_token,

                        }

                    }
                    else {
                        return thunkApi.rejectWithValue(
                            "Something went wrong while getting your account"
                        );
                    }

                }
                else {
                    return thunkApi.rejectWithValue(
                        "Something went wrong while getting your account with token"
                    );
                }

            } else {
                switch (tokenResponse.status) {
                    case 0:
                        return thunkApi.rejectWithValue(
                            "A network error occur. Please check your connection"
                        );
                    case 401:
                        return thunkApi.rejectWithValue(
                            "Invalid Email or Password"
                        );
                    case 400:
                        return thunkApi.rejectWithValue(
                            "A bad request occured"
                        );
                    case 500:
                        return thunkApi.rejectWithValue(
                            "Something went wrong with our servers please try again later"
                        );
                    default:
                        return thunkApi.rejectWithValue(
                            "An error occured. Please try again later"
                        );
                }
            }


        } catch (e: any) {
            console.log(e);
            return thunkApi.rejectWithValue(e);
        }
    }
);




const UserInformation = (

    state: AuthState,
    allUserInformation: UserFull
) => {

    state.user.name = allUserInformation[0].customerName;
    state.user.accountNo = allUserInformation[0].primaryAccountNo["_number"];
    state.user.product = allUserInformation[0].product;
    state.user.availableBalance = allUserInformation[0].availableBalance;
    state.user.currency = allUserInformation[0].ccy;
    state.user.bookBalance = allUserInformation[0].bookBalance;
    return state;
};




const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        setAuthStateTokens(
            state: AuthState,
            action: PayloadAction<{ refreshToken: string; token: string }>
        ) {
            state.refreshToken = action.payload.refreshToken;
            state.accessToken = action.payload.token;
        },
        clearAuthState(state: AuthState) {
            return initialState;
        },

    },

    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                // when login is pending
                state.isLoading = true;
                state.isSuccess = false;
                state.isError = false;
                state.loginErrorMessage = ""
                return state;
            })

            .addCase(loginUser.rejected, (state: AuthState, action) => {
                // when login is unsuccessful
                state.isLoading = false;
                state.isError = true;
                state.isSuccess = false;
                state.loginErrorMessage = action.payload as string;
                return state;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                // when login is successful
                state.isLoading = false;
                state.isError = false;
                state.isSuccess = true;
                state.loginErrorMessage = ""
                console.log(action.payload);
                const allUserInformation = action.payload
                    ?.allUserInformation as UserFull;
                return UserInformation(state, allUserInformation);
            });

    },

});

export const { setAuthStateTokens, clearAuthState } =
    authSlice.actions;

export const authSelector = (state: RootState) => state.auth;



export default authSlice.reducer;












