import axios from 'axios';
import store from './store';

const api = axios.create({
    baseURL: 'http://localhost:3030',
});

api.interceptors.request.use(config => {
    const state = store.getState();

    if (state.session.isLoggedIn) {
        config.headers["authorization"] = `Bearer ${state.session.data.token}`;
    }

    if (config.method === 'DELETE' || config.method === 'POST') {
        config.headers["Content-Type"] = 'application/json; charset=UTF-8';
    }

    return config;
});

export default api;
