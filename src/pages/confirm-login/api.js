import wretch from 'wretch';

const confirmGoogleLogin = (code) =>
  wretch('http://localhost:8000/api/auth/confirm/google')
    .query({
      code,
    })
    .get()
    .json();

export const authConfirmationApi = {
  confirmGoogleLogin,
};
