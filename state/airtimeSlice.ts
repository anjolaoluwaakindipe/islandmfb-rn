import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import axios from "axios";


type Airtime = {
  id: string,
  customerNo: string,
  name: string,
  firstName: null,
  lastName: null,
  otherName: null,
  maritalStatus: null,
  dob: string,
  sex: string,
  gender: string,
  bvn: string,
  phoneRef: null,
  email: null,
  customerType: string,
  region: null,
  relationShipDept: null,
  relationshipMan: string,
  altRelationshipMan: string,
  status: null,
  branch: string,
  rcno: string,
}

const initialState = {
  loading: false,
  posts: {},
  error: ""
}


export const airtimeReq = createAsyncThunk('airtime/airtimeReq',
  async () => {
    return await fetch("http://api.issl.ng:7777/ibank/api/v1/getCustomersLitePaged", { method: "GET" })
      .then(res => res.json()) as Airtime[]
  }
)

export const airtimeSlice = createSlice({
  name: 'airtime',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(airtimeReq.pending, (state = initialState, action) => {
      state.loading = true;
    })
    builder.addCase(airtimeReq.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload
    })
    builder.addCase(airtimeReq.rejected, (state = initialState, action) => {
      state.loading = false;
      state.posts = {};
      state.error = action.payload as string;
    })
  }
})

export default airtimeSlice.reducer
export const airtimeActions={...airtimeSlice.actions,airtimeReq}









