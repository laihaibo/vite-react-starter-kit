import Axios from "axios";
import { Toast } from "zarm";
import { BASEURL } from "../config";

const { MODE } = import.meta.env;
const baseURL = BASEURL[MODE].apiBaseUrl;
const axios = Axios.create({ baseURL, timeout: 20000 });

// 前置拦截器
axios.interceptors.request.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 后置拦截器
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      const msg = error.response.data.message;
      Toast.show(`Code: ${code}, Message: ${msg}`);
      console.log("[Axios Error]", error.response);
    } else {
      Toast.show(`${error}`);
    }

    return Promise.reject(error);
  }
);

export default axios;
