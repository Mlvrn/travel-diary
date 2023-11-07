import { call, put, takeLatest } from 'redux-saga/effects';
import { login, register } from '../../domain/api';
import { loginFailure, loginSuccess, registerSuccess } from './actions';
import { LOGIN_USER, REGISTER_USER } from './constants';

export function* doRegisterUser({ user }) {
  try {
    const response = yield call(register, user);
    yield put(registerSuccess(response));
  } catch (error) {
    console.log(error, '<<< Registration Error');
  }
}

export function* doLoginUser(action) {
  try {
    const allUsers = yield call(login);
    const matchingUser = allUsers.find(
      (user) =>
        user.email === action.credentials.email &&
        user.password === action.credentials.password
    );

    if (matchingUser) {
      yield put(loginSuccess(matchingUser));
      yield put(loginFailure(null));
    } else {
      yield put(loginFailure('Email or password is incorrect.'));
    }
  } catch (error) {
    console.log(error, '<<< Login Error');
  }
}

export default function* authSaga() {
  yield takeLatest(REGISTER_USER, doRegisterUser);
  yield takeLatest(LOGIN_USER, doLoginUser);
}
