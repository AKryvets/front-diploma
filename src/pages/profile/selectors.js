import { formSelector } from '@xcritical/forms';

import { PROFILE_FORM_NAME, profileReducerNamespace } from './consts';
import { initialState } from './store';

const getProfileData = (state) =>
  state[profileReducerNamespace] || initialState;

const getProfileFormData = (state) =>
  formSelector(state, PROFILE_FORM_NAME).model;

export const profileSelectors = {
  getProfileData,
  getProfileFormData,
};
