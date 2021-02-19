import { put, select, takeLatest } from 'redux-saga/effects';
import { NotificationManager } from 'react-notifications';

import { xcriticalFormError, xcriticalFormShowErrors } from '@xcritical/forms';

import { GOOGLE_LOGIN, LOCAL_LOGIN, LOCAL_REGISTRATION } from './store';
import { validate as validateLogin } from './components/login-form';
import { validate as validateRegister } from './components/registration-form';
import { openWindowForAuth } from './utils';
import { authApi } from './api';
import { LOGIN_FORM_NAME, REGISTRATION_FORM_NAME } from './components';
import { authSelectors } from './selectors';

export function* watchAuthSaga() {
  yield takeLatest(GOOGLE_LOGIN, handleGoogleLogin);
  yield takeLatest(LOCAL_LOGIN, handleLocalLogin);
  yield takeLatest(LOCAL_REGISTRATION, handleLocalRegistration);
}

export function* handleGoogleLogin() {
  try {
    // TODO  test this logic
    const getGoogleAuthUrl = yield authApi.getGoogleAuthUrl();
    openWindowForAuth(getGoogleAuthUrl);

    console.log('qqqqqqqqqqqqq');
  } catch (e) {
    console.error(e);
  }
}

export function* handleLocalLogin() {
  try {
    const { email, password } = yield select(authSelectors.getLoginFormData);

    console.log(email, password, 'email, password');

    const requestModel = {
      email,
      password,
    };

    const errors = validateLogin(requestModel);

    if (errors) {
      yield put(xcriticalFormShowErrors(LOGIN_FORM_NAME, true));
      yield put(xcriticalFormError(LOGIN_FORM_NAME, errors));
      return;
    }

    const response = yield authApi.localLogin(requestModel);

    console.log(response);

    console.log('handleLocalLogin');
  } catch (e) {
    NotificationManager.error(JSON.parse(e.message).message);
    console.error(e);
  }
}

export function* handleLocalRegistration() {
  try {
    const { email, password, confirmPassword } = yield select(
      authSelectors.getRegistrationFormData
    );

    const requestModel = {
      email,
      password,
      confirmPassword,
    };

    const errors = validateRegister(requestModel);

    if (errors) {
      yield put(xcriticalFormShowErrors(REGISTRATION_FORM_NAME, true));
      yield put(xcriticalFormError(REGISTRATION_FORM_NAME, errors));
      return;
    }

    const response = yield authApi.localRegister({
      email,
      password,
    });

    console.log(response);

    console.log('handleLocalLogin');
  } catch (e) {
    NotificationManager.error(JSON.parse(e.message).message);
    console.error(e);
  }
}
