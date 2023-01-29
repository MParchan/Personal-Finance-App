import axios from "axios";

const API_URL = "https://localhost:7140/api/Incomes";

export const addIncome = async ({ email, income, accessToken }) => {
  axios.defaults.headers.common = { Authorization: "Bearer " + accessToken };
  const bodyParameters = {
    params: { email },
  };
  return await axios.post(API_URL, income, bodyParameters);
};

export const getUserIncomes = async ({ email, accessToken }) => {
  axios.defaults.headers.common = { Authorization: "Bearer " + accessToken };
  const bodyParameters = {
    params: { email },
  };
  return await axios.get(API_URL + "/UserIncomes", bodyParameters);
};
