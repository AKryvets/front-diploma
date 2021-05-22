import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Form, { xcriticalFormPropertyChange } from '@xcritical/forms';

import { InputField } from '../../../../packages/form-fields/input';

import { Text } from '../../../../styled';
import { tasksSelectors } from '../../selectors';

import { CREATE_QUESTIONS_FORM_NAME, CreateQuestionFields } from './consts';
import { Option } from './Option';

import {
  AddOptionButton,
  OptionsHeaderWrapper,
  OptionsListWrapper,
  OptionsWrapper,
} from './styled';

export const Options = () => {
  const dispatch = useDispatch();

  const { addAnswerOption, options = [], answers = [] } = useSelector(
    tasksSelectors.getCreateQuestionsFormData
  );

  const onAddOption = useCallback(
    (e) => {
      e.preventDefault();
      if (!addAnswerOption) return;

      const newOptions = options?.length
        ? [...options, addAnswerOption]
        : [addAnswerOption];

      dispatch(
        xcriticalFormPropertyChange(
          CREATE_QUESTIONS_FORM_NAME,
          CreateQuestionFields.addAnswerOption,
          ''
        )
      );
      dispatch(
        xcriticalFormPropertyChange(
          CREATE_QUESTIONS_FORM_NAME,
          CreateQuestionFields.options,
          newOptions
        )
      );
    },
    [dispatch, addAnswerOption, options]
  );

  const onDeleteOption = useCallback(
    (label) => {
      const newOptions = options?.filter((value) => value !== label);

      dispatch(
        xcriticalFormPropertyChange(
          CREATE_QUESTIONS_FORM_NAME,
          CreateQuestionFields.options,
          newOptions
        )
      );
    },
    [dispatch, options]
  );

  const addRightAnswers = useCallback(
    (label) => {
      console.log(label, answers);
      const newAnswers = answers?.length ? [...answers, label] : [label];

      dispatch(
        xcriticalFormPropertyChange(
          CREATE_QUESTIONS_FORM_NAME,
          CreateQuestionFields.answers,
          newAnswers
        )
      );
    },
    [dispatch, answers]
  );

  return (
    <>
      <Text>Options</Text>
      <OptionsWrapper>
        <OptionsHeaderWrapper>
          <Form.Field
            name={CreateQuestionFields.addAnswerOption}
            placeholder="Add answer option"
            component={InputField}
            shouldFitContainer
          />
          <AddOptionButton size={30} onClick={onAddOption} />
        </OptionsHeaderWrapper>
        <OptionsListWrapper>
          {options?.map((label) => (
            <Option
              label={label}
              isRight={answers?.includes(label)}
              addRightAnswers={addRightAnswers}
              onDeleteOption={onDeleteOption}
            />
          ))}
        </OptionsListWrapper>
        <Text size={12}>Click on the answer option to mark it as right</Text>
      </OptionsWrapper>
    </>
  );
};
