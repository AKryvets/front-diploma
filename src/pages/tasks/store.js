import { createAction, createSlice } from '@reduxjs/toolkit';

import { TaskCreatingProcessSteps } from './consts';

export const initialState = {
  isReady: false,
  tasks: [],
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
    resetState: () => initialState,
  },
});

export const INIT_VIEW = `${STORE_NAME}/initView`;
export const CREATE_TASK = `${STORE_NAME}/createTask`;

export const tasksActions = {
  ...tasksStore.actions,
  initView: createAction(INIT_VIEW),
  createTask: createAction(CREATE_TASK),
};

export const tasksReducer = tasksStore.reducer;
