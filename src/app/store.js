import { createAction, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isReady: false,
  user: null,
  activeSidebarItem: null,
  isSidebarOpen: true,
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
    setActiveSidebarItem(state, action) {
      state.activeSidebarItem = action.payload;
    },
    setIsSidebarOpen(state, action) {
      state.isSidebarOpen = action.payload;
    },
    resetState: () => initialState,
  },
});

export const GET_USER = `${STORE_NAME}/getUser`;
export const INIT_APP = `${STORE_NAME}/init`;
export const CHECK_VERIFICATION_STATUS = `${STORE_NAME}/checkVerificationStatus`;
export const LOG_OUT = `${STORE_NAME}/logout`;

export const appActions = {
  ...appStore.actions,
  getUser: createAction(GET_USER),
  checkVerificationStatus: createAction(CHECK_VERIFICATION_STATUS),
  init: createAction(INIT_APP),
  logout: createAction(LOG_OUT),
};

export const appReducer = appStore.reducer;
