import { formSelector } from '@xcritical/forms';

import { authReducerNamespace } from './consts';
import { initialState } from './store';
import { LOGIN_FORM_NAME } from './components/login-form';
import { REGISTRATION_FORM_NAME } from './components/registration-form';

const getAuthData = (state) => state[authReducerNamespace] || initialState;

const getLoginFormData = (state) => formSelector(state, LOGIN_FORM_NAME).model;

const getRegistrationFormData = (state) =>
  formSelector(state, REGISTRATION_FORM_NAME).model;

export const authSelectors = {
  getAuthData,
  getLoginFormData,
  getRegistrationFormData,
};
