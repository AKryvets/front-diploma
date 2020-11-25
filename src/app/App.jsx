import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { actions } from '../redux/actions';
import { withRedirectIfNotAuth } from '../components/HOC';
import { LoginGoogle } from '../pages';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.testAction());
  }, []);

  return (
    <>
      <Route exact path="/" render={withRedirectIfNotAuth(() => <Link to="/login">login</Link>)} />
      <Route
        path="/confirm-login"
        render={() => {
          window.opener.location.search = window.location.search;
          window.close();
        }}
      />
      <Route path="/login" render={() => <LoginGoogle />} />
    </>
  );
};
