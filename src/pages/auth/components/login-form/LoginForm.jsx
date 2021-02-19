import React, { useCallback } from 'react';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Button from '@xcritical/button';

import Form from '@xcritical/forms';

import {
  FooterLinkWrapper,
  FormFieldWrapper,
  LabelWrapper,
  LoginFooter,
  SignInTitle,
  SignUpLink,
  SubmitWrapper,
} from '../../styles';

import { PathNames } from '../../../../const';

import { authActions } from '../../store';
import { InputField } from '../../../../packages';

import { LOGIN_FORM_NAME, LoginFields } from './consts';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const onGoogleLogin = useCallback(() => {
    dispatch(authActions.googleLogin());
  }, [dispatch]);

  const onLocalLogin = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(authActions.localLogin());
    },
    [dispatch]
  );

  return (
    <>
      <SignInTitle>Sign In</SignInTitle>
      <LabelWrapper>
        Enter your email address and password to access admin panel.
      </LabelWrapper>

      <Form name={LOGIN_FORM_NAME} onSubmit={onLocalLogin}>
        <FormFieldWrapper>
          <Form.Field
            name={LoginFields.email}
            label="Email address"
            placeholder="Enter email"
            component={InputField}
            shouldFitContainer
          />
        </FormFieldWrapper>

        <FormFieldWrapper>
          <Form.Field
            name={LoginFields.password}
            label="Password"
            placeholder="Password"
            component={InputField}
            shouldFitContainer
          />
        </FormFieldWrapper>

        <SubmitWrapper>
          <Button onClick={onGoogleLogin}>Sign in with Google</Button>
          <Button type="submit">Submit</Button>
        </SubmitWrapper>
      </Form>

      <LoginFooter>
        <FooterLinkWrapper>
          <LabelWrapper>Don't have an account?</LabelWrapper>
          <SignUpLink>
            <Link to={PathNames.registration}>Sign up</Link>
          </SignUpLink>
        </FooterLinkWrapper>
      </LoginFooter>
    </>
  );
};
