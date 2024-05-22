import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const signIn = createAsyncThunk("signIn", async (data) => {
  console.log(`dfsfasf${data}`);
  try {
    const res = await axios.post("http://localhost:8290/api/v1/login", data);
    const response = res.data;
    localStorage.setItem("auth-token", response.token);

    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
});

const authSlice = createSlice({
  name: "authData",
  initialState: {
    authData: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loading = true;
        state.authData = null;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.loading = false;
        state.authData = action.payload;
        console.log(`state.authData${state.authData.token}`);
      })
      .addCase(signIn.rejected, (state) => {
        state.loading = false;
        state.authData = null;
      });
  },
});

export default authSlice.reducer;
