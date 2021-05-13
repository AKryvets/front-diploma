import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import Form from '@xcritical/forms';

import Button from '@xcritical/button';

import { AnimationBlock } from '../../packages/components';

import { InputField } from '../../packages/form-fields/input';

import {
  COMPLETE_REGISTRATION_FORM_NAME,
  CompleteRegistrationFields,
} from './consts';

import {
  Content,
  ContentWrapper,
  FormFieldWrapper,
  PageWrapper,
  Title,
} from './styled';
import { completeRegistrationActions } from './store';

export const CompleteRegistration = () => {
  const dispatch = useDispatch();

  const onSubmitHandle = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(completeRegistrationActions.submit());
    },
    [dispatch]
  );

  return (
    <PageWrapper>
      <AnimationBlock />
      <ContentWrapper>
        <Title>Complete registration</Title>
        <Content>
          <Form
            name={COMPLETE_REGISTRATION_FORM_NAME}
            onSubmit={onSubmitHandle}
          >
            <FormFieldWrapper>
              <Form.Field
                name={CompleteRegistrationFields.firstName}
                label="First name"
                placeholder="First name"
                component={InputField}
                shouldFitContainer
              />
            </FormFieldWrapper>
            <FormFieldWrapper>
              <Form.Field
                name={CompleteRegistrationFields.lastName}
                label="Last name"
                placeholder="Last name"
                component={InputField}
                shouldFitContainer
              />
            </FormFieldWrapper>
            <FormFieldWrapper>
              <Form.Field
                name={CompleteRegistrationFields.nickname}
                label=" Nickname"
                placeholder="Nickname"
                component={InputField}
                shouldFitContainer
              />
            </FormFieldWrapper>
            <FormFieldWrapper>
              <Form.Field
                name={CompleteRegistrationFields.age}
                label="Age"
                placeholder="Age"
                component={InputField}
                shouldFitContainer
              />
            </FormFieldWrapper>
            <Button type="submit">Submit</Button>
          </Form>
        </Content>
      </ContentWrapper>
    </PageWrapper>
  );
};
