import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";

const API_URL = "https://localhost:7140/api/Auth";

export const userRegistration = createAsyncThunk(
  "auth/register",
  async ({ email, password, confirmPassword }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      await axios.post(
        API_URL + "/Register",
        {
          email,
          password,
          confirmPassword,
        },
        config
      );
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userLogin = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response = await axios
        .post(API_URL + "/Login", { email, password }, config)
        .then((response) => {
          return response.data;
        });

      const decodeAccessToken = jwtDecode(response.accessToken);
      const emailFromToken =
        decodeAccessToken[
          ["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]
        ];
      const data = {
        email: emailFromToken,
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      };
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userRefreshToken = createAsyncThunk(
  "auth/refreshToken",
  async ({ email, refreshToken }, { rejectWithValue }) => {
    try {
      /*const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };*/
      const bodyParameters = {
        params: { email, refreshToken },
      };
      const response = await axios
        .post(API_URL + "/RefreshToken", {}, bodyParameters)
        .then((response) => {
          return response.data;
        });
      const data = {
        accessToken: response.accessToken,
        refreshToken: response.refreshToken,
      };
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const userLogout = createAsyncThunk("auth/logout", async () => {
  delete axios.defaults.headers.common["Authorization"];
});
