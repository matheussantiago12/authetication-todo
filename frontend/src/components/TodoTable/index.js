import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { 
    Table, 
    TableContainer, 
    TableHead, 
    TableRow, 
    TableBody,
    TableCell, 
    Paper, 
    IconButton, 
    makeStyles,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
    link: {
        color: 'inherit',
    },
    columnItem: {
        width: '10%',
    },
    columnTitle: {
        width: '70%',
        textAlign: 'center',
    },
    columnDelete: {
        width: '10%',
    },
    margin: {
        margin: theme.spacing(1),
    },
    rowHeader: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
    },
}));

const TodoForm = () => {
    let count = 1;
    const classNames = useStyles();
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch({ type: 'REMOVE_TODO_REQUEST', payload: id })
    };

    const todos = useSelector(state => state.todos.data);

    useEffect(() => {
        dispatch({ type: 'GET_TODOS_REQUEST' });
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table aria-label='simple table'>
                <TableHead>
                    <TableRow className={classNames.rowHeader}>
                        <TableCell className={classNames.columnItem}>
                            Id
                        </TableCell>
                        <TableCell className={classNames.columnTitle}>
                            Título da tarefa
                        </TableCell>
                        <TableCell className={classNames.columnDelete}></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todos.map(todo => (
                        <TableRow key={todo._id}>
                            <TableCell align='center'>
                                {count++}
                            </TableCell>
                            <TableCell align='center'>
                                {todo.title}
                            </TableCell>
                            <TableCell align='center'>
                                <IconButton aria-label='delete' onClick={() => handleDelete(todo._id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default TodoForm;