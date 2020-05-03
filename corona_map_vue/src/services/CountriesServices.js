import axios from "axios";
import NProgress from "nprogress";
const apiClient = axios.create({
  baseURL: "https://api.covid19api.com",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

apiClient.interceptors.request.use(config => {
  NProgress.start();
  return config;
});

apiClient.interceptors.response.use(response => {
  NProgress.done();
  return response;
});

export default {
  getCountries() {
    return apiClient.get("/summary");
  }
};
