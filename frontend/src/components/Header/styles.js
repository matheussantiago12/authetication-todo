import styled from 'styled-components';

export const Container = styled.header`
    background-color: #222b38;
    height: 60px;
    width: 100%;
    margin-bottom: 35px;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        color: inherit;
    }

    h2 {
        cursor: pointer;
    }
`;