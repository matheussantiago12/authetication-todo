import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Container } from './styles';
import { Link } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch({ type: 'LOGOUT' });
    };
    
    
    return(
        <Container> 
            <Link to='/login'>
                <h1>Authentication To-do</h1>
            </Link>
            <h2 onClick={handleClick}>Sair</h2>
        </Container>
    );
};

export default Header;