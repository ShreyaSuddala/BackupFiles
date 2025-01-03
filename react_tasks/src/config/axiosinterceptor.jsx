import axios from "axios"

export const baseUrl="http://10.0.0.32:9696/api/v1"

export const eidiko=axios.create({
    baseURL:baseUrl 
})




eidiko.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        const token =localStorage.getItem("token")
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token
            config.headers['Content-Type'] = 'application/json'
        }
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

eidiko.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);