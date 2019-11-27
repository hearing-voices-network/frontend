import axios from "axios";

const http = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  api: http,
  setupInterceptors: history => {
    http.interceptors.response.use(
      response => {
        return response;
      },
      error => {
        if (error.response.status === 500) {
          history.push("/try-again");
        }

        return Promise.reject(error);
      }
    );
  }
};
