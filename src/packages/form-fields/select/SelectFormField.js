import React from 'react';

import Select from '@xcritical/select';

import { ErrorWrapper, Label } from '../../components';

export const SelectField = ({ error, label, ...rest }) => (
  <>
    <Label>{label}</Label>
    <ErrorWrapper error={error}>
      <Select {...rest} />
    </ErrorWrapper>
  </>
);
