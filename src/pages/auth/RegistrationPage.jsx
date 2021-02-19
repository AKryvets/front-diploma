import React from 'react';

import { AuthLayout } from './AuthLayout';
import { RegistrationForm } from './components/registration-form';

export const RegistrationPage = () => (
  <AuthLayout>
    <RegistrationForm />
  </AuthLayout>
);
