import React from 'react';

import { SwitchGroup } from '@xcritical/checkbox';

import { ErrorWrapper, Label } from '../../components';

export const CheckboxField = ({ error, label, value = [], ...rest }) => (
  <>
    {label && <Label>{label}</Label>}
    <ErrorWrapper error={error}>
      <SwitchGroup values={value} {...rest} />
    </ErrorWrapper>
  </>
);
