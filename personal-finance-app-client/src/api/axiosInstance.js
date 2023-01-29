import axios from "axios";
import dayjs from "dayjs";
import jwtDecode from "jwt-decode";
import { userRefreshToken } from "../features/auth/authActions";

const baseURL = "https://localhost:7140/api";

let accessToken;
let dispatch;
let refreshToken;

export const setProperties = (props) => {
  accessToken = props.accessToken;
  refreshToken = props.refreshToken;
  dispatch = props.dispatch;
};

export const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(async (req) => {
  req.headers.Authorization = "Bearer " + accessToken;
  const token = jwtDecode(accessToken);
  const isExpired = dayjs.unix(token.exp).diff(dayjs()) < 1;
  if (!isExpired) {
    return req;
  } else {
    const data = {
      email:
        token[
          ["http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"]
        ],
      refreshToken: refreshToken,
    };
    const response = await dispatch(userRefreshToken(data));
    console.log(response);
    return req;
  }
});

export default axiosInstance;
