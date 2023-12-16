import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:5000/api/",
  withCredentials: true,
});

export default newRequest; 

/* import axios from "axios";

const newRequest = axios.create({
  baseURL: "http://localhost:5000/api/",
  withCredentials: true,
});

// Add an interceptor to include the accessToken in the Authorization header
newRequest.interceptors.request.use((config) => {
  const accessToken = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("accessToken="))
    ?.split("=")[1];
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

export default newRequest; */

