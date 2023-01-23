import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://localhost:7140/api/IncomeCategories";

export const getAllIncomeCategories = createAsyncThunk(
  "incomeCategories/getAll",
  async () => {
    return axios.get(API_URL).then((response) => response.data);
  }
);
