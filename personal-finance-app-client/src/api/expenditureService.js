import axios from "axios";

const API_URL = "https://localhost:7140/api/Expenditures";

export const addExpenditure = async ({ email, expenditure, accessToken }) => {
  axios.defaults.headers.common = { Authorization: "Bearer " + accessToken };
  const bodyParameters = {
    params: { email },
  };
  return await axios.post(API_URL, expenditure, bodyParameters);
};

export const getUserExpenditures = async ({ email, accessToken }) => {
  axios.defaults.headers.common = { Authorization: "Bearer " + accessToken };
  const bodyParameters = {
    params: { email },
  };
  return await axios.get(API_URL + "/UserExpenditures", bodyParameters);
};
