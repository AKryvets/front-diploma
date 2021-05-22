import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Form, { xcriticalFormPropertyChange } from '@xcritical/forms';

import Button from '@xcritical/button';

import { InputField } from '../../../../packages/form-fields/input';

import { tasksActions } from '../../store';

import { SelectField } from '../../../../packages/form-fields/select';

import { Container, Text } from '../../../../styled';

import { tasksSelectors } from '../../selectors';

import {
  CREATE_QUESTIONS_FORM_NAME,
  CreateQuestionFields,
  QuestionsTypes,
} from './consts';
import { Options } from './Options';

import {
  ButtonsWrapper,
  CreatedQuestionWrapper,
  DeleteQuestionButton,
  FormFieldWrapper,
  HeaderTitle,
  HeaderWrapper,
  QuestionsWrapper,
  Wrapper,
} from './styled';
import { formatOptions } from './utils';

export const QuestionsCreating = () => {
  const dispatch = useDispatch();
  const { type, questions, title, options, answers } = useSelector(
    tasksSelectors.getCreateQuestionsFormData
  );

  const onSubmitHandle = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(tasksActions.createTask());
    },
    [dispatch]
  );

  const onCreateQuestionHandle = useCallback(() => {
    const newQuestion = {
      title,
      type: type.value,
      options,
      answers: type.value === QuestionsTypes.Input ? [answers] : answers,
    };

    const newQuestions = questions?.length
      ? [...questions, newQuestion]
      : [newQuestion];

    dispatch(
      xcriticalFormPropertyChange(
        CREATE_QUESTIONS_FORM_NAME,
        CreateQuestionFields.questions,
        newQuestions
      )
    );
  }, [dispatch, title, type, options, questions, answers]);

  return (
    <Wrapper>
      <Container>
        <Form name={CREATE_QUESTIONS_FORM_NAME} onSubmit={onSubmitHandle}>
          <HeaderWrapper>
            <HeaderTitle>Create questions</HeaderTitle>
          </HeaderWrapper>

          {questions?.map((question) => (
            <CreatedQuestionWrapper>
              <DeleteQuestionButton size={30} />
              <Text size="18px">{`Question: ${question.title}`}</Text>
              <Text>{`Type: ${question.type} field`}</Text>
              <Text>{`Answer options: ${question?.options?.join(', ')}`}</Text>
              <Text>{`Right answers: ${question?.answers?.join(', ')}`}</Text>
            </CreatedQuestionWrapper>
          ))}

          <QuestionsWrapper>
            <DeleteQuestionButton size={30} />

            <FormFieldWrapper>
              <Form.Field
                name={CreateQuestionFields.title}
                label="Title"
                placeholder="Title"
                component={InputField}
                shouldFitContainer
              />
            </FormFieldWrapper>
            <FormFieldWrapper>
              <Form.Field
                name={CreateQuestionFields.type}
                label="Question type"
                placeholder="Select"
                component={SelectField}
                options={formatOptions(QuestionsTypes)}
                shouldFitContainer
              />
            </FormFieldWrapper>
            {type?.value === QuestionsTypes.Input ? (
              <FormFieldWrapper>
                <Form.Field
                  name={CreateQuestionFields.answers}
                  label="Right answer"
                  placeholder="Right answer"
                  component={InputField}
                  shouldFitContainer
                />
              </FormFieldWrapper>
            ) : null}
            {type?.value === QuestionsTypes.RadioButton ||
            type?.value === QuestionsTypes.CheckBox ? (
              <Options />
            ) : null}
            <Button onClick={onCreateQuestionHandle}>Create question</Button>
          </QuestionsWrapper>
          <ButtonsWrapper>
            <Button>Back</Button>
            <Button type="submit">Save</Button>
          </ButtonsWrapper>
        </Form>
      </Container>
    </Wrapper>
  );
};
