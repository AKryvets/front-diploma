import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import 'regenerator-runtime/runtime';

import { rootReducer } from './reducer';
import { rootSaga } from './saga';
import { App } from './app/App';
import { PathNames } from './const';
import {
  CompleteRegistration,
  ConfirmLogin,
  Dashboard,
  LoginPage,
  Profile,
  RegistrationPage,
  Results,
  Tasks,
} from './pages';
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
        <Route exact path={PathNames.root} component={Dashboard} />
        <Route exact path={PathNames.tasks} component={Tasks} />
        <Route exact path={PathNames.results} component={Results} />
        <Route exact path={PathNames.profile} component={Profile} />
        <Route
          exact
          path={PathNames.completeRegistration}
          component={CompleteRegistration}
        />
      </Switch>
    </App>
  </Provider>,
  document.getElementById('root')
);
