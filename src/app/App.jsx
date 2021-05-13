import React, { useEffect } from 'react';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { NotificationContainer } from 'react-notifications';

import { useDispatch, useSelector } from 'react-redux';

import { getTheme } from '../theme';

import { GlobalStyle } from './styles';
import { history } from './history';
import { appSelectors } from './selectors';
import { appActions } from './store';

export const App = ({ children }) => {
  const dispatch = useDispatch();
  const theme = getTheme();

  const { isReady } = useSelector(appSelectors.getAppData);

  useEffect(() => {
    dispatch(appActions.init());
  }, []);

  console.log(isReady, 'isReady');

  return (
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <GlobalStyle />
        <NotificationContainer />
        {children}
      </Router>
    </ThemeProvider>
  );
};
