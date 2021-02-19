import { reducer as formReduce } from '@xcritical/forms';

import { authReducer, authReducerNamespace } from './pages';
import { errorReducer } from './packages';
import { errorReducerNamespace } from './packages/services/error-service/consts';

export const rootReducer = {
  [authReducerNamespace]: authReducer,
  form: formReduce,
  [errorReducerNamespace]: errorReducer,
};
