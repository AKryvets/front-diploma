import { errorReducerNamespace } from './consts';
import { initialState } from './store';

const getAllErrors = (state) => state[errorReducerNamespace] || initialState;

const getErrorsByNamespace = (state, namespace) =>
  getAllErrors(namespace)[namespace] ?? null;

const getError = (state, namespace, name) => {
  const errors = getAllErrors(state)[namespace];

  if (!errors) return null;

  return errors[name] ?? null;
};

export const errorSelectors = {
  getAllErrors,
  getError,
  getErrorsByNamespace,
};
