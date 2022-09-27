import axios from 'axios';



const BACKEND_URL = "http://localhost:8080"

export const headers = new Headers({
    Accept: 'application/json;charset=UTF-8',
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    'Cache-Control': 'max-age=20, min-fresh=15',
});

const axiosInstance = axios.create({
    baseURL: BACKEND_URL,
    headers: headers,
    mode: 'cors',
});


// axiosInstance.interceptors.request.use(function (config) {
//     const token = localStorage.getItem(LOGIN_KEY_TOKEN);
//     config.headers.Authorization = 'Bearer ' + token;
//     return config;
// });

// axiosInstance.interceptors.response.use((response) => {
//     return response;
// }, function (error) {
//     // Do something with response error

//     if (error.message === "Network Error") {
//         return Promise.reject("Server ilə əlaqə qurula bilmədi.");
//     }
//     if (error.response.status === 401) {
//         console.log('unauthorized, logging out ...', error.response);
//         //store.dispatch(logoutUser());
//     }
//     if (error.response.status === 403) {
//         console.log('unauthorized, logging out ...', error.response);
//         store.dispatch(logoutUser());
//     }

//     return Promise.reject(error.response.data.message);
// });

export default axiosInstance;
