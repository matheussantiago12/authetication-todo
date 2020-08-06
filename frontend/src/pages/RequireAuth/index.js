import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const RequireAuth = (ComposedComponent) => {
    const HOF = () => {
        const isUserLoggedIn = useSelector(state => state.session.isLoggedIn);

        return isUserLoggedIn 
            ? <ComposedComponent /> 
            : <Redirect to='/login' />;
    };
    
    return HOF;
};

export default RequireAuth;
