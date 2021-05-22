import { put, takeEvery } from 'redux-saga/effects';

import { catchError } from '../../packages/utils';

import { resultsActions } from './store';

export function* watchResults() {
  yield takeEvery(resultsActions.init.type, handleInit);
}

export function* handleInit() {
  try {
    yield put(resultsActions.setIsReady(false));

    const results = [
      {
        resultDate: '22.04.2021',
        mark: 90,
        maxMark: 100,
        workTime: 3.57,
        title: 'Task title',
      },
      {
        resultDate: '17.05.2021',
        mark: 32,
        maxMark: 100,
        workTime: 1.55,
        title: 'Task1 title',
      },
      {
        resultDate: '22.05.2021',
        mark: 75,
        maxMark: 100,
        workTime: 2.34,
        title: 'Task2 title',
      },
    ];

    yield put(resultsActions.setResults(results));
    yield put(resultsActions.setIsReady(true));
  } catch (e) {
    catchError(e);
  }
}
