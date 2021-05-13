import { createSelector } from '@reduxjs/toolkit';

import { appReducerNamespace } from './consts';
import { initialState } from './store';

const getAppData = (state) => state[appReducerNamespace] || initialState;

const getUser = createSelector(getAppData, (state) => state.user);

export const appSelectors = {
  getAppData,
  getUser,
};
