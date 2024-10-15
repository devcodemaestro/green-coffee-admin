import axios from "axios";
import { setCookie } from "./cookie";

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const admin = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const postLogin = async ({ payload, setErrMsg }) => {
  try {
    // console.log("Sending request with payload:", payload); // 디버깅 로그 추가
    const res = await admin.post(`/user/login`, payload);
    // console.log("Response received:", res.data); // 디버깅 로그 추가
    const { role, token, refreshToken, ...result } = res.data;
    if (role && token) {
      setCookie("token", token);
      setCookie("refreshToken", refreshToken);
    }
    return { role, token, result };
  } catch (err) {
    // console.error("Request failed:", err); // 디버깅 로그 추가
    if (err.response && err.response.status === 400) {
      setErrMsg(err.response.data);
    } else {
      setErrMsg("Unexpected error occurred");
    }
  }
};

export const postLogout = async () => {
  try {
    const res = await api.post(`/user/logout`);
    const result = res.status;

    return { result };
  } catch (err) {
    console.log(err);
  }
};

export default api;
export { postLogin, admin };
