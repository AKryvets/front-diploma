import { createAction, createSlice } from '@reduxjs/toolkit';

import { ResultSteps } from './consts';

export const initialState = {
  isReady: false,
  results: [],
  filters: {},
  resultStep: ResultSteps.TestTask,
};

const STORE_NAME = '@results';

const resultsStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setIsReady(state, action) {
      state.isReady = action.payload;
    },
    setResults(state, action) {
      state.results = action.payload;
    },
    setFilters(state, action) {
      state.filters = action.payload;
    },
    resetState: () => initialState,
  },
});

export const INIT = `${STORE_NAME}/init`;

export const resultsActions = {
  ...resultsStore.actions,
  init: createAction(INIT),
};

export const resultsReducer = resultsStore.reducer;
