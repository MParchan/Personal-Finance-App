import axios from "axios";

const API_URL = "https://localhost:7140/api/IncomeCategories";

export const getUserIncomeCategories = async ({ email, accessToken }) => {
  axios.defaults.headers.common = { Authorization: "Bearer " + accessToken };
  const bodyParameters = {
    params: { email },
  };
  const response = await axios.get(
    API_URL + "/UserIncomeCategories",
    bodyParameters
  );
  return response.data;
};

export const addIncomeCategorie = async ({
  email,
  accessToken,
  newCategory,
}) => {
  axios.defaults.headers.common = { Authorization: "Bearer " + accessToken };
  return await axios
    .post(API_URL, newCategory, {
      params: { email },
    })
    .then((response) => {
      return response;
    });
};
