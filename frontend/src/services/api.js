import axios from 'axios';
import store from './store';

const api = axios.create({
    baseURL: 'http://localhost:3030',
});

export const authenticate = async (email, password) => {
    const response = await api.post('/authenticate', { email, password})
        .then(response => ({ response }))
        .catch(error => ({ error }));

    return response;
};

api.interceptors.request.use(config => {
    const state = store.getState();

    if (state.session.isLoggedIn) {
        config.headers["authorization"] = `Bearer ${state.session.user.user_token}`;
    }

    if (config.method === 'DELETE' || config.method === 'POST') {
        config.headers["Content-Type"] = 'application/json; charset=UTF-8';
    }

    return config;
});

export default api;
