import { put, takeLatest, takeEvery, all, take, call } from 'redux-saga/effects';
import api, { authenticate, fetchTodos } from '../services/api';

/**
 * Session
 */
function* authenticateLogin (action) {
    try {
        const { email, password } = action.payload;
        const response = yield call(api.post, '/authenticate', { email, password });

        yield put({ type: 'LOGIN_SUCCESS', payload: response.data });
    } catch (error) {
        yield put({ type: 'LOGIN_FAILURE' });
    }
}

function* actionAuthenticateLogin () {
    const action = yield takeLatest('LOGIN_REQUEST', authenticateLogin);
}

/**
 * Todos
 */
function* fetchAllTodos () {
    try {
        const response = yield call(api.get, '/todos');

        yield put({ type: 'GET_TODOS_SUCCESS', payload: response.data });
    } catch (error) {
        yield put({ type: 'GET_TODOS_FAILURE' });
    }
}

function* createTodo (action) {
    try {
        const title = action.payload;
        const response = yield call(api.post, '/todos', { title });

        yield put({ type: 'ADD_TODO_SUCCESS', payload: response.data });
    } catch (error) {
        yield put({ type: 'ADD_TODO_FAILURE' });
    }
}

function* removeTodo (action) {
    try {
        const id = action.payload;
        const response = yield call(api.delete, `/todos/${id}`);

        yield put({ type: 'REMOVE_TODO_SUCCESS', payload: id });
    } catch (error) {
        yield put({ type: 'REMOVE_TODO_FAILURE' });
    }
}

function* actionFetchAllTodos () {
    yield takeLatest('GET_TODOS_REQUEST', fetchAllTodos);
}

function* actionCreateTodo () {
    yield takeLatest('ADD_TODO_REQUEST', createTodo);
}

function* actionRemoveTodo () {
    yield takeLatest('REMOVE_TODO_REQUEST', removeTodo);
}

export default function* rootSaga () {
    yield all([
        actionAuthenticateLogin(),
        actionFetchAllTodos(),
        actionCreateTodo(),
        actionRemoveTodo(),
    ]);
}
