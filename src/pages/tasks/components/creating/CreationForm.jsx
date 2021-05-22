import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import HelpRhombusOutlineIcon from 'mdi-react/HelpRhombusOutlineIcon';

import Form, { xcriticalFormPropertyChange } from '@xcritical/forms';

import Button from '@xcritical/button';

import Switch from '@xcritical/switch';

import taskIcon from '../../../../../public/images/task-management.jpg';
import { InputField } from '../../../../packages/form-fields/input';

import { tasksActions } from '../../store';

import { TaskCreatingProcessSteps } from '../../consts';

import { SelectField } from '../../../../packages/form-fields/select';

import { Container } from '../../../../styled';

import { tasksSelectors } from '../../selectors';

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
  const { type, showAnswers } = useSelector(
    tasksSelectors.getCreateTaskFormData
  );

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

  const onConfigureQuestionsButtonClickHandle = useCallback(() => {
    dispatch(
      tasksActions.setCurrentStep(TaskCreatingProcessSteps.TestQuestions)
    );
  }, [dispatch]);

  const onSwitchValueChange = useCallback(
    (value, e) => {
      dispatch(
        xcriticalFormPropertyChange(CREATE_TASK_FORM_NAME, e.target.name, value)
      );
    },
    [dispatch]
  );

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
              placeholder="Select"
              component={SelectField}
              options={getTaskTypesOptions(TasksTypes)}
              shouldFitContainer
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Form.Field
              name={CreateTaskFields.timeLimit}
              label="Time limit"
              placeholder="(minutes)"
              component={InputField}
              shouldFitContainer
            />
          </FormFieldWrapper>
          {type?.value === TasksTypes.Practical && (
            <FormFieldWrapper>
              <Form.Field
                name={CreateTaskFields.linkForCheck}
                label="Link to the verification module"
                placeholder="url"
                component={InputField}
                shouldFitContainer
              />
            </FormFieldWrapper>
          )}
          <FormFieldWrapper>
            <Form.Field
              name={CreateTaskFields.showAnswers}
              label="Show answers after passing?"
              component={Switch}
              checked={showAnswers}
              onChange={onSwitchValueChange}
              shouldFitContainer
            />
          </FormFieldWrapper>
          <FormFieldWrapper>
            <Form.Field
              name={CreateTaskFields.numberOfAttempts}
              label="Number of attempts"
              placeholder="Number of attempts"
              component={InputField}
              shouldFitContainer
            />
          </FormFieldWrapper>
          <ButtonsWrapper>
            <Button appearance="secondary" onClick={onBackButtonClickHandle}>
              Back
            </Button>
            {type?.value === TasksTypes.Test && (
              <Button
                appearance="secondary"
                onClick={onConfigureQuestionsButtonClickHandle}
              >
                <HelpRhombusOutlineIcon />
                Configure questions
              </Button>
            )}
            <Button type="submit">Create task</Button>
          </ButtonsWrapper>
        </Form>
      </Container>
    </Wrapper>
  );
};
