import { put, takeEvery } from 'redux-saga/effects';

import { catchError } from '../../packages/utils';

import { tasksApi } from '../tasks/api';

import { dashboardActions } from './store';

export function* watchDashboard() {
  yield takeEvery(dashboardActions.init.type, handleInitView);
  yield takeEvery(dashboardActions.setFilters.type, handleFilter);
}

export function* handleInitView() {
  try {
    yield put(dashboardActions.setIsReady(false));

    const tasks = yield tasksApi.getTasks({ creatorId: true });

    yield put(dashboardActions.setTasks(tasks));
    yield put(dashboardActions.setIsReady(true));
  } catch (e) {
    catchError(e);
  }
}

export function* handleFilter({ payload: filter }) {
  try {
    yield put(dashboardActions.setIsReady(false));

    const tasks = yield tasksApi.getTasks(filter);

    yield put(dashboardActions.setTasks(tasks));

    yield put(dashboardActions.setIsReady(true));
  } catch (e) {
    catchError(e);
  }
}
