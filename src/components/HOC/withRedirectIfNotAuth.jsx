import React from 'react';
import { redirectIfNotAuth } from '../../utils';

export const withRedirectIfNotAuth = Page => (
  props => (redirectIfNotAuth() ? null : <Page {...props} />)
);
