import { createAction, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isReady: false,
  myTasks: [],
  filters: {},
};

const STORE_NAME = '@dashboard';

const dashboardStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setIsReady(state, action) {
      state.isReady = action.payload;
    },
    setTasks(state, action) {
      state.myTasks = action.payload;
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
    resetState: () => initialState,
  },
});

export const INIT = `${STORE_NAME}/init`;

export const dashboardActions = {
  ...dashboardStore.actions,
  init: createAction(INIT),
};

export const dashboardReducer = dashboardStore.reducer;
