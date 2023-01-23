import { createSlice } from "@reduxjs/toolkit";
import { getAllIncomeCategories } from "./incomeCategoriesActions";

const initialState = {
  loading: false,
  incomeCategories: [],
  error: null,
  success: false,
};

const incomeCategoriesSlice = createSlice({
  name: "incomeCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      //get income categories
      .addCase(getAllIncomeCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.incomeCategories = [];
        state.success = false;
      })
      .addCase(getAllIncomeCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.incomeCategories = payload;
        state.success = true;
      })
      .addCase(getAllIncomeCategories.rejected, (state, { error }) => {
        state.loading = false;
        state.error = error.message;
      })

      .addDefaultCase(() => {});
  },
});

export default incomeCategoriesSlice.reducer;
