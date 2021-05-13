import { NotificationManager } from 'react-notifications';

import { history } from '../../app/history';
import { PathNames } from '../../const';

export const catchError = (error) => {
  try {
    console.error(error);
    const parsedError = JSON.parse(error.message);

    if (parsedError.statusCode === 401) {
      history.push({ pathname: PathNames.login });

      return;
    }

    NotificationManager.error(parsedError.message);
  } catch (e) {
    console.error(e);
  }
};
