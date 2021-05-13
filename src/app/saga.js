import { put, takeEvery } from 'redux-saga/effects';

import { PathNames } from '../const';

import { catchError } from '../packages/utils';

import { appActions } from './store';
import { appApi } from './api';
import { history } from './history';

export function* watchApp() {
  yield takeEvery(appActions.init.type, handleInitApp);
  yield takeEvery(
    appActions.checkVerificationStatus.type,
    checkVerificationStatus
  );
}

export function* handleInitApp() {
  try {
    yield put(appActions.setIsReady(false));
    const user = yield appApi.getUser();

    yield put(appActions.setUser(user));

    yield put(appActions.checkVerificationStatus());

    yield put(appActions.setIsReady(true));
  } catch (e) {
    catchError(e);
  }
}

export function* checkVerificationStatus() {
  try {
    const { isPersonalDataFilled } = yield appApi.getVerificationStatus();

    if (!isPersonalDataFilled) {
      history.push({ pathname: PathNames.completeRegistration });

      return;
    }

    history.push({ pathname: PathNames.root });
  } catch (e) {
    catchError(e);
  }
}
