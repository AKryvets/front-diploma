import { dashboardReducerNamespace } from './consts';
import { initialState } from './store';

const getDashboardData = (state) =>
  state[dashboardReducerNamespace] || initialState;

export const dashboardSelectors = {
  getDashboardData,
};
