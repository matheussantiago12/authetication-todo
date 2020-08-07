import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: 'LOGOUT' });
    };
    
    const user = useSelector(state => state.session.user);
    
    return(
        <header>
            <h1>Header {user.email}</h1>
            <button onClick={handleClick}></button>
        </header>
    );
};

export default Header;