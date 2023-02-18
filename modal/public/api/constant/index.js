import axios from 'axios';
// import { toast } from 'react-toastify';

const BASE_URL = 'http://localhost:3000';
export const BASE_INSTANCE = axios.create({
    headers:{
                'Content-Type':'application/json'
            },
    baseURL: BASE_URL,
    timeout: 15000,
});
BASE_INSTANCE.interceptors.request.use(
    function req(config) {
        // Do something before request is sent
        return config;
    },
    function err(error) {
        // Do something with request error
        if (error.response?.data?.error === (500 || '500'))
            toast.error(error.response?.data?.error);
        return Promise.reject(error);
    },
);
