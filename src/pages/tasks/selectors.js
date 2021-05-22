import { formSelector } from '@xcritical/forms';

import { tasksReducerNamespace } from './consts';
import { initialState } from './store';
import { CREATE_TASK_FORM_NAME } from './components/creating/consts';
import { CREATE_QUESTIONS_FORM_NAME } from './components/questions-creating/consts';

const getTasksData = (state) => state[tasksReducerNamespace] || initialState;

const getCreateTaskFormData = (state) =>
  formSelector(state, CREATE_TASK_FORM_NAME).model;

const getCreateQuestionsFormData = (state) =>
  formSelector(state, CREATE_QUESTIONS_FORM_NAME).model;

export const tasksSelectors = {
  getTasksData,
  getCreateTaskFormData,
  getCreateQuestionsFormData,
};
