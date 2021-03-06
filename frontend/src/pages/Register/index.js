import React, { useEffect } from 'react';

import { Link, useHistory } from 'react-router-dom';
import { TextField } from 'formik-material-ui';
import { Button, Grid, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import api from '../../services/api';

const initialValues = {
    email: '',
    password: '',
};

const validationSchema = Yup.object({
    email: Yup.string().email('Email inválido').required('Insira o seu email'),
    password: Yup.string().required('Insira a sua senha'),
});

const useStyles = makeStyles(theme => ({
    submit: {
        margin: theme.spacing(2, 0, 2),
    },
    link: {
        color: 'inherit',
        textDecoration: 'none',
    },
}));

const Login = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    
    const handleSubmit = (values, { setSubmitting }) => {
        const { email, password, confirmPassword } = values;

        if (values.password === values.confirmPassword) {
            api.post('/register', { email, password })
                .then(response => history.push('/login'))
                .catch(error => alert('Ocorreu um erro ao se registrar'));
        } else {
            alert('As senhas inseridas não são iguais!');
            setSubmitting(false);
        }
    };

    const isUserLoggedIn = useSelector(state => state.session.isLoggedIn);
    
    useEffect(() => {
        if (isUserLoggedIn)
            history.push('/todos');
    }, [isUserLoggedIn]);

    return (
        <>
            <h1>Cadastre-se</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit} 
            >
                {({isSubmitting}) => (
                    <Form>
                        <Field 
                            name='email'
                            label='Email'
                            type='text'
                            margin='normal'
                            variant='outlined'
                            fullWidth
                            required
                            component={TextField}
                        />
                        <Field 
                            name='password'
                            label='Senha'
                            type='password'
                            margin='normal'
                            variant='outlined'
                            fullWidth
                            required
                            component={TextField}
                        />
                        <Field 
                            name='confirmPassword'
                            label='Confirme a senha'
                            type='password'
                            margin='normal'
                            variant='outlined'
                            fullWidth
                            required
                            component={TextField}
                        />
                        <Button
                            href='' 
                            type='submit'
                            variant='contained'
                            color='secondary'
                            fullWidth
                            disabled={isSubmitting}
                            className={classes.submit}
                        >
                            Enviar
                        </Button>
                    </Form>
                )}
            </Formik>
        </>
    );
};

export default Login;
