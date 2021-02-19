import { all } from 'redux-saga/effects';

import { watchAuthConfirmationSaga, watchAuthSaga } from './pages';

export function* rootSaga() {
  yield all([watchAuthConfirmationSaga(), watchAuthSaga()]);
}
