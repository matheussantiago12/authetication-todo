import React from 'react';

import { useDispatch } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { InputBase } from 'formik-material-ui';
import * as Yup from 'yup';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Paper, Divider, IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        marginBottom: theme.spacing(1),
    },
    input: {
        flex: 1,
        marginLeft: theme.spacing(2),
    },
    iconButton: {
        padding: 7,
    },
    divider: {
        height: 18,
        margin: 5,
    },
}));

const initialValues = {
    title: '',
};

const validationSchema = Yup.object({
    title: Yup.string().required('Este campo é obrigatório'),
});

const TodoForm = () => {
    const classNames = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = ({ title }, { setSubmitting, resetForm }) => {
        dispatch({ type: 'ADD_TODO_REQUEST', payload: title });
        setSubmitting(false);
        resetForm();
    };
    
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <Paper className={classNames.root}>
                        <Field
                            name='title'
                            label='Título da tarefa'
                            type='text'
                            component={InputBase}
                            magin='normal'
                            variant='outlined'
                            required
                            className={classNames.input}
                        />
                        <Divider className={classNames.divider} orientation='vertical' />
                        <IconButton
                            color='secondary'
                            type='submit'
                            className={classNames.iconButton}
                            aria-label='adicionar'
                        >
                            <AddCircleIcon />
                        </IconButton>
                    </Paper>
                </Form>
            )}
        </Formik>
    );
};

export default TodoForm;
