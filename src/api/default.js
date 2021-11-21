import axios from 'axios';

(function defaultAPI() {
  // Backend's URL
  axios.defaults.baseURL = (process.env.NODE_ENV === "production")
    ? "https://bsuemc-api.herokuapp.com"
    : "http://localhost:8080";

  // To enable storing cookies in cross origin requests
  axios.defaults.withCredentials = true;

  // Add custom header to each request so the backend will know that the
  // request came from this application and not from a browser
  axios.interceptors.request.use((config) => {
    config.headers["X-CLIENT-REQUEST"] = "X-CLIENT-REQUEST";
    return config
  }, (err) => {
    return Promise.reject(err)
  })
})()
