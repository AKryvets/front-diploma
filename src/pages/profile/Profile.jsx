import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import Form from '@xcritical/forms';

import Button from '@xcritical/button';

import { LayoutWrapper } from '../../packages/components';

import { InputField } from '../../packages/form-fields/input';

import { PROFILE_FORM_NAME, ProfileFields } from './consts';

import {
  Content,
  ContentWrapper,
  FormFieldWrapper,
  PageWrapper,
  Title,
} from './styled';
import { profileActions } from './store';

export const Profile = () => {
  const dispatch = useDispatch();

  const onSubmitHandle = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(profileActions.submit());
    },
    [dispatch]
  );

  return (
    <LayoutWrapper>
      <PageWrapper>
        <ContentWrapper>
          <Title>User info</Title>
          <Content>
            <Form name={PROFILE_FORM_NAME} onSubmit={onSubmitHandle}>
              <FormFieldWrapper>
                <Form.Field
                  name={ProfileFields.firstName}
                  label="First name"
                  placeholder="First name"
                  component={InputField}
                  shouldFitContainer
                />
              </FormFieldWrapper>
              <FormFieldWrapper>
                <Form.Field
                  name={ProfileFields.lastName}
                  label="Last name"
                  placeholder="Last name"
                  component={InputField}
                  shouldFitContainer
                />
              </FormFieldWrapper>
              <FormFieldWrapper>
                <Form.Field
                  name={ProfileFields.nickname}
                  label=" Nickname"
                  placeholder="Nickname"
                  component={InputField}
                  shouldFitContainer
                />
              </FormFieldWrapper>
              <FormFieldWrapper>
                <Form.Field
                  name={ProfileFields.age}
                  label="Age"
                  placeholder="Age"
                  component={InputField}
                  shouldFitContainer
                />
              </FormFieldWrapper>
              <Button type="submit">Update</Button>
            </Form>
          </Content>
        </ContentWrapper>
      </PageWrapper>
    </LayoutWrapper>
  );
};
