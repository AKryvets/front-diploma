import React, { useCallback, useState } from 'react';

import { Modal } from '@xcritical/modal';

import Button from '@xcritical/button';
import Form from '@xcritical/forms';

import { CheckboxField, InputField } from '../../../../packages';
import { Text } from '../../../../styled';

import { QuestionsTypes } from '../questions-creating/consts';
import {
  FormFieldWrapper,
  HeaderTitle,
  HeaderWrapper,
} from '../questions-creating/styled';

import { COMPLETE_TEST } from './consts';

import {
  ButtonWrapper,
  ContentWrapper,
  ResultModalButtonsWrapper,
  ResultModalWrapper,
  TestsWrapper,
  Wrapper,
} from './styled';
import { formatOptions } from './utils';

export const TestTask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const task = { title: 'Task title ' };

  const questions = [
    {
      title: 'test1',
      type: 'input',
    },
    {
      title: 'test2 asdas',
      type: 'input',
    },
    {
      title: 'test3',
      type: 'checkbox',
      options: ['qwe', '12321', '12gdfgsdfg'],
    },
    {
      title: 'test4',
      type: 'radioButton',
      options: ['qwe', '12321', '12gdfgsdfg'],
    },
  ];

  const onSubmitHandle = useCallback(
    (e) => {
      e.preventDefault();

      setIsModalOpen(true);
    },
    [isModalOpen]
  );

  return (
    <Wrapper>
      <ContentWrapper>
        <Form name={COMPLETE_TEST} onSubmit={onSubmitHandle}>
          <HeaderWrapper>
            <HeaderTitle>{task.title}</HeaderTitle>
          </HeaderWrapper>

          <TestsWrapper>
            {questions?.map((question) => {
              if (question.type === QuestionsTypes.Input) {
                return (
                  <FormFieldWrapper>
                    <Form.Field
                      name={question.title}
                      label={question.title}
                      placeholder="Enter your answer"
                      component={InputField}
                      shouldFitContainer
                    />
                  </FormFieldWrapper>
                );
              }

              if (question.type === QuestionsTypes.CheckBox) {
                return (
                  <FormFieldWrapper>
                    <Form.Field
                      name={question.title}
                      label={question.title}
                      type="checkbox"
                      placeholder="Enter your answer"
                      component={CheckboxField}
                      options={formatOptions(question?.options)}
                      shouldFitContainer
                    />
                  </FormFieldWrapper>
                );
              }

              if (question.type === QuestionsTypes.RadioButton) {
                return (
                  <FormFieldWrapper>
                    <Form.Field
                      name={question.title}
                      label={question.title}
                      type="radio"
                      placeholder="Enter your answer"
                      component={CheckboxField}
                      options={formatOptions(question?.options)}
                      shouldFitContainer
                    />
                  </FormFieldWrapper>
                );
              }

              return null;
            })}
          </TestsWrapper>

          <ButtonWrapper>
            <Button type="submit">Submit</Button>
          </ButtonWrapper>
        </Form>
      </ContentWrapper>
      <Modal
        isOpen={isModalOpen}
        onModalCancel={() => setIsModalOpen(false)}
        title="Result"
        iconClose={<div />}
      >
        <ResultModalWrapper>
          <Text size="24px">{`Your mark: ${2}/${questions.length}`}</Text>
          <ResultModalButtonsWrapper>
            <Button appearance="secondary">More info</Button>
            <Button>Go to task list</Button>
          </ResultModalButtonsWrapper>
        </ResultModalWrapper>
      </Modal>
    </Wrapper>
  );
};
