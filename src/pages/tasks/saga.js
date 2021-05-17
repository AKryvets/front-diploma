import { delay, put, select, takeEvery } from 'redux-saga/effects';
import { NotificationManager } from 'react-notifications';

import { xcriticalFormError, xcriticalFormShowErrors } from '@xcritical/forms';

import { catchError } from '../../packages/utils';

import { tasksActions } from './store';
import { validate } from './validate';
import { tasksSelectors } from './selectors';
import { CREATE_TASK_FORM_NAME } from './components/creating/consts';
import { tasksApi } from './api';
import { TaskCreatingProcessSteps } from './consts';

export function* watchTasks() {
  yield takeEvery(tasksActions.initView.type, handleInitView);
  yield takeEvery(tasksActions.createTask.type, handleCreateTask);
  yield takeEvery(tasksActions.search.type, handleSearch);
  yield takeEvery(tasksActions.setFilters.type, handleFilter);
  yield takeEvery(tasksActions.deleteTask.type, handleDeleteTask);
}

export function* handleInitView() {
  try {
    yield put(tasksActions.setIsReady(false));

    const tasks = yield tasksApi.getTasks();

    yield put(tasksActions.setTasks(tasks));
    yield put(tasksActions.setIsReady(true));
  } catch (e) {
    catchError(e);
  }
}

export function* handleDeleteTask({ payload: taskId }) {
  try {
    yield put(tasksActions.setIsReady(false));

    yield tasksApi.deleteTask(taskId);

    const { tasks } = yield select(tasksSelectors.getTasksData);

    const filteredTasks = tasks.filter(({ _id }) => _id !== taskId);

    yield put(tasksActions.setTasks(filteredTasks));
    yield put(tasksActions.setIsReady(true));
  } catch (e) {
    catchError(e);
  }
}

export function* handleSearch({ payload: search }) {
  try {
    yield put(tasksActions.setIsReady(false));

    const query = {};

    if (search) query.search = search;

    const tasks = yield tasksApi.getTasks(query);

    yield put(tasksActions.setTasks(tasks));
    yield put(tasksActions.setIsReady(true));
  } catch (e) {
    catchError(e);
  }
}

export function* handleFilter({ payload: filter }) {
  try {
    yield put(tasksActions.setIsReady(false));

    const tasks = yield tasksApi.getTasks(filter);

    yield put(tasksActions.setTasks(tasks));

    yield delay(1000);
    yield put(tasksActions.setIsReady(true));
  } catch (e) {
    catchError(e);
  }
}

export function* handleCreateTask() {
  try {
    const model = yield select(tasksSelectors.getCreateTaskFormData);

    const requestModel = {
      ...model,
      type: model.type.value,
    };

    const errors = validate(requestModel);

    if (errors) {
      yield put(xcriticalFormShowErrors(CREATE_TASK_FORM_NAME, true));
      yield put(xcriticalFormError(CREATE_TASK_FORM_NAME, errors));
      return;
    }

    const response = yield tasksApi.createTask(requestModel);

    if (response) {
      yield put(tasksActions.setCurrentStep(TaskCreatingProcessSteps.View));
    }

    NotificationManager.success('Task successfully created');
  } catch (e) {
    catchError(e);
  }
}
