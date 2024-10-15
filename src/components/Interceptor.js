import { useEffect } from "react";
import { useNavigate } from "react-router";
import { getCookie, removeCookie, setCookie } from "../api/cookie";
import api from "../api/admin";

let isRefresh = false;
let failedQueue = [];

const reqQueue = (error, token = null) => {
  failedQueue.forEach((item) => {
    if (error) {
      item.reject(error);
    } else {
      item.resolve(token);
    }
  });

  failedQueue = [];
};

export const Interceptor = ({ children }) => {
  const navigate = useNavigate();

  const requestInterceptor = api.interceptors.request.use(
    async (config) => {
      const token = getCookie("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  const responseInterceptor = api.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const { response } = error;
      const status = response ? response.status : null;
      const req = error.config;
      const refreshToken = getCookie("refreshToken");
      const token = getCookie("token");

      if (status === 400 && refreshToken) {
        // if (!token && refreshToken) {
        if (!isRefresh) {
          isRefresh = true;
          try {
            const { data } = await api.post(`/user/refresh`, { refreshToken });
            const token = data;
            setCookie("token", token);
            reqQueue(null, token);
            isRefresh = false;

            req.headers.Authorization = `Bearer ${token}`;
            return api(req);
          } catch (error) {
            reqQueue(error, null);
            isRefresh = false;
            navigate("/");
            removeCookie("token");
            removeCookie("refreshToken");
            return Promise.reject(error);
          }
        }

        const retryReq = new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        });

        return retryReq
          .then((token) => {
            req.headers.Authorization = `Bearer ${token}`;
            return api(req);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      return Promise.reject(error);
    }
  );

  useEffect(() => {
    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
    };
  }, [responseInterceptor, requestInterceptor]);

  return children;
};
