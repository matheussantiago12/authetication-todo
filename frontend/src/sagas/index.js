import { put, takeLatest, takeEvery, all, take, call } from 'redux-saga/effects';
import { authenticate } from '../services/api';

function* authenticateteste(action) {
    const { email, password } = action.payload;
    const { response, error } = yield call(authenticate, email, password);

    if (response)
        yield put({ type: 'LOGIN', payload: { email, password } });

    if (error)
        console.log("EAE");
}

function* actionTeste() {
    const action = yield takeLatest('LOGIN_REQUEST', authenticateteste);
}

export default function* rootSaga() {
    yield all([
        actionTeste(),
    ]);
}
