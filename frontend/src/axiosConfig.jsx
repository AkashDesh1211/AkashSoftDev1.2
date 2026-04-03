import axios from "axios";


const baseURL =
  window.location.hostname === "localhost"
    ? "http://localhost:5001"
    : `http://${window.location.hostname}:5001`;

const axiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});


axiosInstance.interceptors.request.use(
  (config) => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      const user = JSON.parse(storedUser);

      if (user.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

//import axios from 'axios';

//const axiosInstance = axios.create({
//  baseURL: 'http://localhost:5001', // local
  //baseURL: 'http://3.26.96.188:5001', // live
 // headers: { 'Content-Type': 'application/json' },
//});

//export default axiosInstance;
