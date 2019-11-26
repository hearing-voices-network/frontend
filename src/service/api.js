import axios from "axios";

const http = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

export default {
  api: http,
  setupInterceptors: history => {
    http.interceptors.response.use(
      response => {
        console.log(response);
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
