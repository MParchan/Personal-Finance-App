import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";

const baseURL = "https://localhost:7140/api";

// Function that will be called to refresh authorization
const refreshAuthLogic = (failedRequest) =>
  axios
    .post(baseURL+"/Auth/RefreshToken")
    .then((tokenRefreshResponse) => {
      localStorage.setItem("token", tokenRefreshResponse.data.token);
      failedRequest.response.config.headers["Authorization"] =
        "Bearer " + tokenRefreshResponse.data.token;
      return Promise.resolve();
    });

// Instantiate the interceptor
createAuthRefreshInterceptor(axios, refreshAuthLogic);
