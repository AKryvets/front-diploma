import { put, select, takeEvery } from 'redux-saga/effects';
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
}

export function* handleInitView() {
  try {
    yield put(tasksActions.setIsReady(false));

    const query = {
      limit: 20,
    };

    const tasks = yield tasksApi.getTasks(query);

    yield put(tasksActions.setTasks(tasks));
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

    console.log(response);
    if (response) {
      yield put(tasksActions.setCurrentStep(TaskCreatingProcessSteps.View));
    }

    NotificationManager.success('Task successfully created');
  } catch (e) {
    catchError(e);
  }
}
