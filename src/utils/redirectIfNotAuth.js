import { getHistory } from '../app/browser-history';

export const redirect = target => {
  try {
    getHistory().push(target);
  } catch (e) {
    console.error(e);
  }
};

export const redirectIfNotAuth = () => {
  if (window.location.pathname === '/') {
    setTimeout(() => redirect('/login'), 3000);
    return true;
  }
  return false;
};
