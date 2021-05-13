import { put, select, takeEvery } from 'redux-saga/effects';
import { NotificationManager } from 'react-notifications';

import { xcriticalFormError, xcriticalFormShowErrors } from '@xcritical/forms';

import { ACCESS_TOKEN_NAME, PathNames } from '../../const';

import { appActions } from '../../app/store';

import { history } from '../../app/history';

import { GOOGLE_LOGIN, LOCAL_LOGIN, LOCAL_REGISTRATION } from './store';
import { validate as validateLogin } from './components/login-form';
import { validate as validateRegister } from './components/registration-form';
import { openWindowForAuth } from './utils';
import { authApi } from './api';
import { LOGIN_FORM_NAME, REGISTRATION_FORM_NAME } from './components';
import { authSelectors } from './selectors';

export function* watchAuthSaga() {
  yield takeEvery(GOOGLE_LOGIN, handleGoogleLogin);
  yield takeEvery(LOCAL_LOGIN, handleLocalLogin);
  yield takeEvery(LOCAL_REGISTRATION, handleLocalRegistration);
}

export function* handleGoogleLogin() {
  try {
    // TODO  dashboard this logic
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

    const { accessToken } = yield authApi.localLogin(requestModel);

    localStorage.setItem(ACCESS_TOKEN_NAME, accessToken);

    yield put(appActions.checkVerificationStatus());

    NotificationManager.success('User successfully sign in');
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

    yield authApi.localRegister({
      email,
      password,
    });

    history.push({ pathname: PathNames.login });
    NotificationManager.success('User successfully registered');
  } catch (e) {
    NotificationManager.error(JSON.parse(e.message).message);
    console.error(e);
  }
}
