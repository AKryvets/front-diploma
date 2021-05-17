import { reducer as formReduce } from '@xcritical/forms';

import {
  authReducer,
  authReducerNamespace,
  completeRegistrationReducer,
  completeRegistrationReducerNamespace,
  tasksReducer,
  tasksReducerNamespace,
} from './pages';
import { errorReducer } from './packages';
import { errorReducerNamespace } from './packages/services/error-service/consts';
import { appReducerNamespace } from './app/consts';
import { appReducer } from './app/store';

export const rootReducer = {
  [appReducerNamespace]: appReducer,
  [authReducerNamespace]: authReducer,
  [completeRegistrationReducerNamespace]: completeRegistrationReducer,
  form: formReduce,
  [tasksReducerNamespace]: tasksReducer,
  [errorReducerNamespace]: errorReducer,
};
