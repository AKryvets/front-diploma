import React, { useCallback, useEffect } from 'react';

import { useDispatch } from 'react-redux';

import Form, { xcriticalFormReset } from '@xcritical/forms';

import Button from '@xcritical/button';

import { Link } from '../../../../styled';

import {
  FormFieldWrapper,
  LabelWrapper,
  LoginFooter,
  SignInTitle,
  SignUpLink,
  SubmitWrapper,
} from '../../styled';

import { PathNames } from '../../../../const';

import { authActions } from '../../store';
import { InputField } from '../../../../packages';

import { REGISTRATION_FORM_NAME, RegistrationFields } from './consts';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const onGoogleRegistration = useCallback(() => {
    dispatch(authActions.googleLogin());
  }, [dispatch]);

  const onLocalRegistration = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(authActions.localRegistration());
    },
    [dispatch]
  );

  useEffect(
    () => () => {
      dispatch(xcriticalFormReset(REGISTRATION_FORM_NAME));
    },
    []
  );

  return (
    <>
      <SignInTitle>Sign Up</SignInTitle>

      <Form name={REGISTRATION_FORM_NAME} onSubmit={onLocalRegistration}>
        <FormFieldWrapper>
          <Form.Field
            name={RegistrationFields.email}
            label="Email address"
            placeholder="Enter email"
            component={InputField}
            shouldFitContainer
          />
        </FormFieldWrapper>

        <FormFieldWrapper>
          <Form.Field
            name={RegistrationFields.password}
            label="Password"
            placeholder="Password"
            component={InputField}
            shouldFitContainer
          />
        </FormFieldWrapper>

        <FormFieldWrapper>
          <Form.Field
            name={RegistrationFields.confirmPassword}
            label="Confirm password"
            placeholder="Confirm password"
            component={InputField}
            shouldFitContainer
          />
        </FormFieldWrapper>

        <SubmitWrapper>
          <Button
            appearance="googleRegistration"
            onClick={onGoogleRegistration}
          >
            Sign up with Google
          </Button>
          <Button type="submit">Submit</Button>
        </SubmitWrapper>
      </Form>
      <LoginFooter>
        <LabelWrapper>You have an account?</LabelWrapper>
        <SignUpLink>
          <Link to={PathNames.login}>Sign in</Link>
        </SignUpLink>
      </LoginFooter>
    </>
  );
};
