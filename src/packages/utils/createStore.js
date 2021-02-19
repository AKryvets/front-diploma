import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore as reduxCreateStore,
} from 'redux';

import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

export const createStore = (reducers = {}, options = {}) => {
  const {
    persistedState = {},
    preMiddleware = [],
    postMiddleware = [],
  } = options;

  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [...preMiddleware, sagaMiddleware, ...postMiddleware];

  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const composedMiddleware = composeEnhancers(applyMiddleware(...middlewares));

  const store = reduxCreateStore(
    combineReducers({
      ...reducers,
    }),
    persistedState,
    composedMiddleware
  );

  store.runSaga = sagaMiddleware.run;

  return store;
};
