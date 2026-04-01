import axios from 'axios';

// Automatically detect environment
const baseURL =
  window.location.hostname === 'localhost'
    ? 'http://localhost:5001' // local dev
    : `http://${window.location.hostname}:5001`; // EC2 auto

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;


//import axios from 'axios';

//const axiosInstance = axios.create({
//  baseURL: 'http://localhost:5001', // local
  //baseURL: 'http://3.26.96.188:5001', // live
 // headers: { 'Content-Type': 'application/json' },
//});

//export default axiosInstance;
