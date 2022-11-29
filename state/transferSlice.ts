import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type Transfer = {
 amount: number,
 fromAccountNo: String,
 narrative: string,
 reference: string,
 toAccountNo: string,
 user: {
  fullName: String,
  ipAddress: string,
  screenName: string
 },
 valueDate:string,
}
const initialState = {
 post:{}
}