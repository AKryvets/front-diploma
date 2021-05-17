import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import Form from '@xcritical/forms';

import Button from '@xcritical/button';

import taskIcon from '../../../../../public/images/task-management.jpg';
import { InputField } from '../../../../packages/form-fields/input';

import { tasksActions } from '../../store';

import { TaskCreatingProcessSteps } from '../../consts';

import { SelectField } from '../../../../packages/form-fields/select';

import { Container } from '../../../../styled';

import { CREATE_TASK_FORM_NAME, CreateTaskFields, TasksTypes } from './consts';

import {
  ButtonsWrapper,
  FormFieldWrapper,
  HeaderIcon,
  HeaderTitle,
  HeaderWrapper,
  Wrapper,
} from './styled';
import { getTaskTypesOptions } from './utils';

export const CreationForm = () => {
  const dispatch = useDispatch();

  const onSubmitHandle = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(tasksActions.createTask());
    },
    [dispatch]
  );

  const onBackButtonClickHandle = useCallback(() => {
    dispatch(tasksActions.setCurrentStep(TaskCreatingProcessSteps.View));
  }, [dispatch]);

  return (
    <Wrapper>
      <Container>
        <Form name={CREATE_TASK_FORM_NAME} onSubmit={onSubmitHandle}>
          <HeaderWrapper>
            <HeaderIcon src={taskIcon} />
            <HeaderTitle>Create new task</HeaderTitle>
          </HeaderWrapper>
          <FormFieldWrapper>
            <Form.Field
              name={CreateTaskFields.title}
              label="Title"
              placeholder="Title"
              component={InputField}
              shouldFitContainer
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Form.Field
              name={CreateTaskFields.description}
              label="Description"
              placeholder="Description"
              component={InputField}
              shouldFitContainer
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Form.Field
              name={CreateTaskFields.type}
              label="Type"
              placeholder="Type"
              component={SelectField}
              options={getTaskTypesOptions(TasksTypes)}
              shouldFitContainer
            />
          </FormFieldWrapper>
          <ButtonsWrapper>
            <Button appearance="secondary" onClick={onBackButtonClickHandle}>
              Back
            </Button>
            <Button type="submit">Create task</Button>
          </ButtonsWrapper>
        </Form>
      </Container>
    </Wrapper>
  );
};
