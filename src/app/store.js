import { createAction, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isReady: false,
  user: null,
};

const STORE_NAME = '@app';

const appStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setIsReady(state, action) {
      state.isReady = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const GET_USER = `${STORE_NAME}/getUser`;
export const INIT_APP = `${STORE_NAME}/init`;
export const CHECK_VERIFICATION_STATUS = `${STORE_NAME}/checkVerificationStatus`;

export const appActions = {
  ...appStore.actions,
  getUser: createAction(GET_USER),
  checkVerificationStatus: createAction(CHECK_VERIFICATION_STATUS),
  init: createAction(INIT_APP),
};

export const appReducer = appStore.reducer;
