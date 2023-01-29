import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://localhost:7140/api/ExpenditureCategories";

export const getUserExpenditureCategories = createAsyncThunk(
  "expenditureCategories/getUserCategories",
  async ({ email, token }, { rejectWithValue }) => {
    try {
      axios.defaults.headers.common = { Authorization: "Bearer " + token };
      const bodyParameters = {
        params: { email },
      };
      return axios
        .get(API_URL + "/UserExpenditureCategories", bodyParameters)
        .then((response) => response.data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
