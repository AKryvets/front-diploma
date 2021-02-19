import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import 'regenerator-runtime/runtime';

import { rootReducer } from './reducer';
import { rootSaga } from './saga';
import { App } from './app/App';
import { PathNames } from './const';
import { LoginPage, RegistrationPage } from './pages/auth';
import { ConfirmLogin } from './pages/confirm-login';
import { createStore } from './packages';

import './style.css';
import 'react-notifications/lib/notifications.css';

const store = createStore(rootReducer);

store.runSaga(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App>
      <Switch>
        <Route exact path={PathNames.login} component={LoginPage} />
        <Route
          exact
          path={PathNames.registration}
          component={RegistrationPage}
        />
        <Route exact path={PathNames.confirmLogin} component={ConfirmLogin} />
      </Switch>
    </App>
  </Provider>,
  document.getElementById('root')
);
