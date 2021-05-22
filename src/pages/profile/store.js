import { createAction, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isReady: false,
};

const STORE_NAME = '@profile';

const profileStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setIsReady(state, action) {
      state.isReady = action.payload;
    },
  },
});

export const PROFILE_SUBMIT = `${STORE_NAME}/submit`;

export const profileActions = {
  ...profileStore.actions,
  submit: createAction(PROFILE_SUBMIT),
};

export const profileReducer = profileStore.reducer;
