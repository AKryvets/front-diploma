import { all } from 'redux-saga/effects';

import { watchApp } from './app/saga';
import {
  watchAuthConfirmationSaga,
  watchAuthSaga,
  watchCompleteRegistration,
  watchTasks,
} from './pages';

export function* rootSaga() {
  yield all([
    watchApp(),
    watchAuthConfirmationSaga(),
    watchAuthSaga(),
    watchCompleteRegistration(),
    watchTasks(),
  ]);
}
