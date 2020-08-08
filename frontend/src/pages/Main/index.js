import React from 'react';

import TodoForm from '../../components/TodoForm';
import TodoTable from '../../components/TodoTable';

const Main = () => {
    return (
        <>
            <h1>Lista de Todos</h1>
            <TodoForm />
            <TodoTable />
        </>
    );
};

export default Main;
