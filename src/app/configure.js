import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from '../reducer';
import { rootSaga } from '../saga';
import 'regenerator-runtime/runtime';

export const configure = () => {
  const saga = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(saga),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );

  saga.run(rootSaga);

  return store;
};
