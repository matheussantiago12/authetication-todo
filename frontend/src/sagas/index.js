import { put, takeLatest, all } from 'redux-saga/effects';

function* teste() {
    console.log("teste");
}

function* actionTeste() {
    yield takeLatest('ADD_TODO', teste)
}

export default function* rootSaga() {
    yield all([
        actionTeste(),
    ]);
}
