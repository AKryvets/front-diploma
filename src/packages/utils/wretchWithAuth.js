import wretch from 'wretch';

import { ACCESS_TOKEN_NAME } from '../../const';

export const wretchWithAuth = (...rest) => {
  const token = localStorage.getItem(ACCESS_TOKEN_NAME);

  return wretch(...rest).auth(`Bearer ${token}`);
};
