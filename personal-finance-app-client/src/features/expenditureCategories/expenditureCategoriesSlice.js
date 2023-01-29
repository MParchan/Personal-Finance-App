import { createSlice } from "@reduxjs/toolkit";
import { getUserExpenditureCategories } from "./expenditureCategoriesActions";

const initialState = {
  loading: false,
  expenditureCategories: [],
  error: null,
  success: false,
};

const expenditureCategoriesSlice = createSlice({
  name: "expenditureCategories",
  initialState,
  reducers: {
    resetExpenditureCategories(state) {
      state.loading = false;
      state.expenditureCategories = [];
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      //get income categories
      .addCase(getUserExpenditureCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.incomeCategories = [];
        state.success = false;
      })
      .addCase(getUserExpenditureCategories.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.incomeCategories = payload;
        state.success = true;
      })
      .addCase(getUserExpenditureCategories.rejected, (state, { error }) => {
        state.loading = false;
        state.expenditureCategories = [];
        state.success = false;
        state.error = error.message;
      })

      .addDefaultCase(() => {});
  },
});

export const { resetExpenditureCategories } =
  expenditureCategoriesSlice.actions;
export default expenditureCategoriesSlice.reducer;
