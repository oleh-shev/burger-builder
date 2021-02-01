import {delay} from 'redux-saga/effects';
import {put} from 'redux-saga/effects';
import * as actions from '../actions/index';
import axios from "axios";

export function* logoutSaga() {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    yield put(actions.logoutSucceed());
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.logout());
}

export function* authUserSaga(action) {
    yield put(actions.authStart());
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    };
    let url = action.isSignup ?
        'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBZ_b9OucK2dLaA-NdC-zKuDTvGaSWfVlA' :
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBZ_b9OucK2dLaA-NdC-zKuDTvGaSWfVlA';
    try {
        const response = yield axios.post(url, authData)
        yield localStorage.setItem('token', response.data.idToken);
        const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('userId', response.data.localId);
        yield put(actions.authSuccess(response.data.idToken, response.data.localId));
        yield put(actions.checkAuthTimeOut(response.data.expiresIn));
    } catch (err) {
        yield put(actions.authFail(err.response.data.error));
    }
}

export function* authCheckStateSaga() {
    const token = yield localStorage.getItem('token');
        if (!token) {
            yield put(actions.logout());
        }
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
        if (expirationDate > new Date()) {
            const userId = yield localStorage.getItem('userId');
            yield put(actions.authSuccess(token, userId));
            yield put(actions.checkAuthTimeOut((expirationDate.getTime() - new Date().getTime()) / 1000));
        } else {
            yield put(actions.logout());
        }
}