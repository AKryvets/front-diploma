import { createAction, createSlice } from '@reduxjs/toolkit';

export const initialState = {
  isReady: false,
};

const STORE_NAME = '@complete-registration';

const completeRegistrationStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setIsReady(state, action) {
      state.isReady = action.payload;
    },
  },
});

export const COMPLETE_REGISTRATION_SUBMIT = `${STORE_NAME}/submit`;

export const completeRegistrationActions = {
  ...completeRegistrationStore.actions,
  submit: createAction(COMPLETE_REGISTRATION_SUBMIT),
};

export const completeRegistrationReducer = completeRegistrationStore.reducer;
