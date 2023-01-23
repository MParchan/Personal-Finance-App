import { createSlice } from "@reduxjs/toolkit";
import {
  userLogin,
  userLogout,
  userRefreshToken,
  userRegistration,
} from "./authActions";

const initialState = {
  loading: false,
  userEmail: null,
  tokenExp: null,
  registerError: null,
  loginError: null,
  registerSuccess: false,
  logged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetRegistration(state) {
      state.registerError = null;
      state.registerSuccess = false;
    },
    resetLogin(state) {
      state.loginError = null;
    },
  },
  extraReducers: (builder) => {
    builder
      //registration
      .addCase(userRegistration.pending, (state) => {
        state.loading = true;
        state.registerError = null;
      })
      .addCase(userRegistration.fulfilled, (state) => {
        state.loading = false;
        state.registerSuccess = true;
      })
      .addCase(userRegistration.rejected, (state, { payload }) => {
        state.loading = false;
        state.registerError = payload;
      })

      //login
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
        state.loginError = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.logged = true;
        state.userEmail =
          payload[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
          ];
        state.tokenExp = payload["exp"];
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.loading = false;
        state.loginError = payload;
      })

      //refresh token
      .addCase(userRefreshToken.pending, (state) => {
        state.loading = true;
        state.loginError = null;
      })
      .addCase(userRefreshToken.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.logged = true;
        state.userEmail = payload;
      })
      .addCase(userRefreshToken.rejected, (state, { payload }) => {
        state.loading = false;
        state.loginError = payload;
      })

      //logout
      .addCase(userLogout.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogout.fulfilled, (state) => {
        state.loading = false;
        state.logged = false;
        state.userEmail = null;
      })
      .addCase(userLogout.rejected, (state) => {
        state.loading = false;
      })

      .addDefaultCase(() => {});
  },
});

export const { resetRegistration, resetLogin } = authSlice.actions;
export default authSlice.reducer;
