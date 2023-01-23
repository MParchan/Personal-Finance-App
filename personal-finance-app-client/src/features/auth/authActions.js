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
      const { data } = await axios.post(
        API_URL + "/Login",
        { email, password },
        config
      );
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + data.accessToken;
      const token = jwtDecode(data.accessToken);
      return token;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userRefreshToken = createAsyncThunk(
  "auth/refreshToken",
  async ({ email }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        API_URL + "/RefreshToken",
        { email },
        config
      );
      axios.defaults.headers.common["Authorization"] =
        "Bearer " + data.accessToken;
      const token = jwtDecode(data.accessToken);
      return token[
        "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
      ];
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userLogout = createAsyncThunk("auth/logout", async () => {
  delete axios.defaults.headers.common["Authorization"];
});
