import { createSlice } from '@reduxjs/toolkit';

export const initialState = {};

const STORE_NAME = '@errors';

const errorStore = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setError(state, action) {
      const { namespace, name, error } = action.payload;
      state[namespace] = {
        ...(state[namespace] ?? {}),
        [name]: error,
      };
    },
    resetError(state, action) {
      const { namespace, name } = action.payload;
      state[namespace] = {
        ...(state[namespace] ?? {}),
        [name]: null,
      };
    },
    setNamespaceErrors(state, action) {
      const { namespace, errors } = action.payload;
      state[namespace] = errors;
    },
  },
});

export const errorActions = {
  setError: errorStore.actions.setError,
  setNamespaceErrors: errorStore.actions.setNamespaceErrors,
  resetError: errorStore.actions.resetError,
};

export const errorReducer = errorStore.reducer;
