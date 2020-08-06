import React from 'react';

import { Redirect } from "react-router-dom";

import RequireAuth from './pages/RequireAuth';
import Main from './pages/Main';
import Register from './pages/Register';
import Login from './pages/Login';

const routes = [
    {
        path: '/login',
        component: Login,
        exact: true,
        key: 'login',
    },
    {
        path: '/cadastro',
        component: Register,
        exact: true,
        key: 'register',
    },
    {
        path: '/todos',
        component: RequireAuth(Main),
        exact: true,
        key: 'todos',
    },
    {
        path: '/',
        component: () => <Redirect to='/login' />,
        exact: false,
        key: 'root',
    }
];

export default routes;