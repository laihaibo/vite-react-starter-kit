import { TYPE_BASEURL } from "../types";

// eslint-disable-next-line import/prefer-default-export
export const BASEURL: TYPE_BASEURL = {
  development: {
    cdn: "./",
    apiBaseUrl: "/api"
  },
  beta: {
    cdn: "//s.xxx.com/vite-react-app/beta",
    apiBaseUrl: "//www.beta.xxx.com/v1"
  },
  production: {
    cdn: "//s.xxx.com/vite-react-app/production",
    apiBaseUrl: "//www.xxx.com/v1"
  }
};
