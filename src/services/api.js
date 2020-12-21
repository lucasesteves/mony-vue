import axios from 'axios';
import store from '../store/store'

const api=axios.create({
    baseURL:'http://localhost:4000/'
});

api.interceptors.request.use(async (config) => {
    const token = store.getters.getToken
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
});

export default api;