import { createAction, createSlice } from '@reduxjs/toolkit';

import { TaskCreatingProcessSteps } from './consts';

export const initialState = {
  isReady: false,
  tasks: [],
  filters: {},
  previewTask: {},
  currentStep: TaskCreatingProcessSteps.View,
};

const STORE_NAME = '@tasks';

const tasksStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setIsReady(state, action) {
      state.isReady = action.payload;
    },
    setCurrentStep(state, action) {
      state.currentStep = action.payload;
    },
    setTasks(state, action) {
      state.tasks = action.payload;
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
    setPreviewTask(state, action) {
      state.previewTask = action.payload;
    },
    resetState: () => initialState,
  },
});

export const INIT_VIEW = `${STORE_NAME}/initView`;
export const CREATE_TASK = `${STORE_NAME}/createTask`;
export const SEARCH = `${STORE_NAME}/search`;
export const DELETE_TASK = `${STORE_NAME}/deleteTask`;

export const tasksActions = {
  ...tasksStore.actions,
  initView: createAction(INIT_VIEW),
  createTask: createAction(CREATE_TASK),
  search: createAction(SEARCH),
  deleteTask: createAction(DELETE_TASK),
};

export const tasksReducer = tasksStore.reducer;
