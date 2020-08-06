import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3030',
});

api.interceptors.request.use(config => {
    const state = store.getState();

    if (state.session.isLogged) {
        config.headers["authorization"] = `Bearer ${state.session.user.user_token}`;
    }

    if (config.method === 'DELETE' || config.method === 'POST') {
        config.headers["Content-Type"] = 'application/json; charset=UTF-8';
    }

    return config;
});

export default api;
