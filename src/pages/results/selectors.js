import { resultsReducerNamespace } from './consts';
import { initialState } from './store';

const getResultsData = (state) =>
  state[resultsReducerNamespace] || initialState;

export const resultsSelectors = {
  getResultsData,
};
