import { takeLatest } from 'redux-saga/effects';
import queryString from 'query-string';

import { CONFIRM_GOOGLE_LOGIN } from './store';
import { authConfirmationApi } from './api';

export function* watchAuthConfirmationSaga() {
  yield takeLatest(CONFIRM_GOOGLE_LOGIN, confirmGoogleLogin);
}

export function* confirmGoogleLogin() {
  try {
    const { code } = queryString.parse(window.location.search);
    const response = yield authConfirmationApi.confirmGoogleLogin(code);

    // TODO check logic
    console.log(response);
  } catch (e) {
    console.error(e);
  }
}
