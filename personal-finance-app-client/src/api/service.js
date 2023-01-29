/*import axiosInstance from "./axiosInstance";

export const getUserExpenditureCategories = async ({ email }) => {
  const bodyParameters = {
    params: { email },
  };
  const response = await axiosInstance.get(
    "/ExpenditureCategories/UserExpenditureCategories",
    bodyParameters
  );
  return response.data;
};

export const getUserIncomeCategories = async ({ email }) => {
  const bodyParameters = {
    params: { email },
  };
  const response = await axiosInstance.get(
    "/IncomeCategories/UserIncomeCategories",
    bodyParameters
  );
  return response.data;
};

export const addExpenditure = async ({ email, expenditure }) => {
  const bodyParameters = {
    params: { email },
  };
  return await axiosInstance.post("/Expenditures", expenditure, bodyParameters);
};

export const getUserExpenditures = async ({ email }) => {
  const bodyParameters = {
    params: { email },
  };
  return await axiosInstance.get(
    "/Expenditures/UserExpenditures",
    bodyParameters
  );
};

export const addIncome = async ({ email, income }) => {
  const bodyParameters = {
    params: { email },
  };
  return await axiosInstance.post("/Incomes", income, bodyParameters);
};

export const getUserIncomes = async ({ email }) => {
  const bodyParameters = {
    params: { email },
  };
  return await axiosInstance.get("/Incomes/UserIncomes", bodyParameters);
};
*/
