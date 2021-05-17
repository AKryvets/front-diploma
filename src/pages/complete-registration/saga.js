import { put, select, takeEvery } from 'redux-saga/effects';
import { NotificationManager } from 'react-notifications';

import { xcriticalFormError, xcriticalFormShowErrors } from '@xcritical/forms';

import { appSelectors } from '../../app/selectors';

import { catchError } from '../../packages/utils';

import { appActions } from '../../app/store';

import { history } from '../../app/history';

import { PathNames } from '../../const';

import { COMPLETE_REGISTRATION_SUBMIT } from './store';
import { validate } from './validate';
import { completeRegistrationSelectors } from './selectors';
import { COMPLETE_REGISTRATION_FORM_NAME } from './consts';
import { completeRegistrationApi } from './api';

export function* watchCompleteRegistration() {
  yield takeEvery(COMPLETE_REGISTRATION_SUBMIT, handleLocalLogin);
}

export function* handleLocalLogin() {
  try {
    const requestModel = yield select(
      completeRegistrationSelectors.getCompleteRegistrationFormData
    );

    const errors = validate(requestModel);

    if (errors) {
      yield put(xcriticalFormShowErrors(COMPLETE_REGISTRATION_FORM_NAME, true));
      yield put(xcriticalFormError(COMPLETE_REGISTRATION_FORM_NAME, errors));
      return;
    }

    const { _id } = yield select(appSelectors.getUser);

    const response = yield completeRegistrationApi.saveUserInfoById(
      _id,
      requestModel
    );

    yield put(appActions.setUser(response));

    history.push({ pathname: PathNames.root });

    NotificationManager.success('User successfully sign in');
  } catch (e) {
    catchError(e);
  }
}
