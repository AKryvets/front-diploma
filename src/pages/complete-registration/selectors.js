import { formSelector } from '@xcritical/forms';

import {
  COMPLETE_REGISTRATION_FORM_NAME,
  completeRegistrationReducerNamespace,
} from './consts';
import { initialState } from './store';

const getCompleteRegistrationData = (state) =>
  state[completeRegistrationReducerNamespace] || initialState;

const getCompleteRegistrationFormData = (state) =>
  formSelector(state, COMPLETE_REGISTRATION_FORM_NAME).model;

export const completeRegistrationSelectors = {
  getCompleteRegistrationData,
  getCompleteRegistrationFormData,
};
