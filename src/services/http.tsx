import axios from 'axios';

axios.defaults.withCredentials = true;

const services = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 10000,
    headers: {}
});

services.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        console.log(error);

        return Promise.reject(error);
    }
);

services.interceptors.response.use(
    (response) => {
        // const success = response.data.success;
        // const res = response.data.data;
        // if (res && !success) return;
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default services;
