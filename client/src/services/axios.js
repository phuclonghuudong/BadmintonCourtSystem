import axios from "axios";
import SummaryApi from "../apis";
import TokenService from "./tokenService";

const baseURL = import.meta.env.VITE_BASE_URL;

const Axios = axios.create({
  baseURL,
  withCredentials: true,
});

Axios.interceptors.request.use(
  (config) => {
    const token = TokenService.getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

Axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const refreshToken = TokenService.getRefreshToken();
      if (refreshToken) {
        const newAccessToken = await refreshAccessToken(refreshToken);

        if (newAccessToken) {
          TokenService.setAccessToken(newAccessToken);
          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
          return Axios(originalRequest);
        }
      }
    }

    return Promise.reject(error);
  }
);

const refreshAccessToken = async (refreshToken) => {
  try {
    const response = await Axios({
      ...SummaryApi.refresh_token,
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    return response?.data?.data?.accessToken || null;
  } catch (error) {
    console.error("Refresh token error:", error);
    return null;
  }
};

export default Axios;
