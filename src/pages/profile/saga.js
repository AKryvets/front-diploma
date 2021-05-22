import { put, select, takeEvery } from 'redux-saga/effects';
import { NotificationManager } from 'react-notifications';

import { xcriticalFormError, xcriticalFormShowErrors } from '@xcritical/forms';

import { appSelectors } from '../../app/selectors';

import { catchError } from '../../packages/utils';

import { appActions } from '../../app/store';

import { history } from '../../app/history';

import { PathNames } from '../../const';

import { PROFILE_SUBMIT } from './store';
import { validate } from './validate';
import { profileSelectors } from './selectors';
import { PROFILE_FORM_NAME } from './consts';
import { completeRegistrationApi } from './api';

export function* watchProfile() {
  yield takeEvery(PROFILE_SUBMIT, handleUpdateUserInfo);
}

export function* handleUpdateUserInfo() {
  try {
    const requestModel = yield select(profileSelectors.getProfileFormData);

    const errors = validate(requestModel);

    if (errors) {
      yield put(xcriticalFormShowErrors(PROFILE_FORM_NAME, true));
      yield put(xcriticalFormError(PROFILE_FORM_NAME, errors));
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
