import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { authConfirmation } from './store';

export const ConfirmLogin = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authConfirmation.confirm());
  }, [dispatch]);

  return <>hello</>;
};
