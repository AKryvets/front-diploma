import { createAction } from '@reduxjs/toolkit';

const STORE_NAME = '@auth-confirmation';

export const CONFIRM_GOOGLE_LOGIN = `${STORE_NAME}/confirm`;

export const authConfirmation = {
  confirm: createAction(CONFIRM_GOOGLE_LOGIN),
};
