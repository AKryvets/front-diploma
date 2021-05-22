import React from 'react';

import Input from '@xcritical/input';

import { ErrorWrapper, Label } from '../../components';

export const InputField = ({ error, label, ...rest }) => (
  <>
    {label && <Label>{label}</Label>}
    <ErrorWrapper error={error}>
      <Input autoComplete="off" {...rest} />
    </ErrorWrapper>
  </>
);
