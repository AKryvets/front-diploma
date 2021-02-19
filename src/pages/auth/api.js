import wretch from 'wretch';

const getGoogleAuthUrl = () => wretch('/api/auth/google').get().json();

const localLogin = (loginRequestModel) =>
  wretch('/api/auth/login').post(loginRequestModel).json();

const localRegister = (registerRequestModel) =>
  wretch('/api/auth/register').post(registerRequestModel).json();

export const authApi = {
  localLogin,
  localRegister,
  getGoogleAuthUrl,
};
