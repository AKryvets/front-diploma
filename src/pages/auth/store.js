import { createAction, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isReady: false,
};

const STORE_NAME = '@auth';

const authStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setIsReady(state, action) {
      state.isReady = action.payload;
    },
  },
});

export const GOOGLE_LOGIN = `${STORE_NAME}/googleLogin`;
export const LOCAL_LOGIN = `${STORE_NAME}/localLogin`;
export const LOCAL_REGISTRATION = `${STORE_NAME}/localRegistration`;

export const authActions = {
  ...authStore.actions,
  localLogin: createAction(LOCAL_LOGIN),
  localRegistration: createAction(LOCAL_REGISTRATION),
  googleLogin: createAction(GOOGLE_LOGIN),
};

export const authReducer = authStore.reducer;
