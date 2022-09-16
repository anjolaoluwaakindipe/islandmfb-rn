import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { string } from "zod"
import authRequest from "../utils/requests/authReq"
import { SecureStorage } from "../services/Singleton/secureStorage"
import { RootState } from "./store"
// import { RootState } from "./store"

const initialState: AuthState = {
    accessToken: "",
    refreshToken: "",
    errorMessage: "",
    isError: false,
    isLoading: false,
    isSuccess: false,
    requestStatus: 0,
    loginErrorMessage: "",
}






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
                    SecureStorage.getInst().save("refresh_token", tokenResponse.data.refresh_token)]
                )


                console.log("success ")
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
                return state;
            });

    },

});

export const { setAuthStateTokens, clearAuthState } =
    authSlice.actions;

    export const authSelector = (state: RootState) => state.auth;



export default authSlice.reducer;












