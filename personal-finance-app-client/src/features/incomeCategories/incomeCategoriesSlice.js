import { createSlice } from "@reduxjs/toolkit";
import { getUserIncomeCategories } from "./incomeCategoriesActions";

const initialState = {
  loading: false,
  incomeCategories: [],
  error: null,
  success: false,
};

const incomeCategoriesSlice = createSlice({
  name: "incomeCategories",
  initialState,
  reducers: {
    resetIncomeCategories(state) {
      state.loading = false;
      state.incomeCategories = [];
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      //get income categories
      .addCase(getUserIncomeCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.incomeCategories = [];
        state.success = false;
      })
      .addCase(getUserIncomeCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.incomeCategories = payload;
        state.success = true;
      })
      .addCase(getUserIncomeCategories.rejected, (state, { error }) => {
        state.loading = false;
        state.incomeCategories = [];
        state.success = false;
        state.error = error.message;
      })

      .addDefaultCase(() => {});
  },
});

export const { resetIncomeCategories } = incomeCategoriesSlice.actions;
export default incomeCategoriesSlice.reducer;
