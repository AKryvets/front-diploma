import React  from 'react';
import {Router} from 'react-router-dom';
import {ThemeProvider} from 'styled-components';
import {getTheme} from '../theme';
import {GlobalStyle} from './styles';
import {NotificationContainer} from 'react-notifications';
import {getHistory} from './browserHistory';

export const App = ({ children }) => {
  const history = getHistory();
  const theme = getTheme();

  return (
    <ThemeProvider theme={theme}>
        <Router history={history}>
          <GlobalStyle/>
          <NotificationContainer/>
          { children }
        </Router>
    </ThemeProvider>
  );
};
