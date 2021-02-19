import React from 'react';
import {Popover} from '@xcritical/popover';

export const ErrorWrapper = ({ children,  error}) => (
  <Popover
    appearance="error"
    position="top right"
    content={error}
    visible={!!error}
  >
    { children }
  </Popover>
);