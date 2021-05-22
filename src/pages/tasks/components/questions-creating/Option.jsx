import React, { useCallback } from 'react';

import { Text } from '../../../../styled';

import { DeleteOptionButton, OptionWrapper } from './styled';

export const Option = ({ label, onDeleteOption, addRightAnswers, isRight }) => {
  const onDelete = useCallback(
    (e) => {
      e.preventDefault();

      onDeleteOption(label);
    },
    [onDeleteOption, label]
  );

  const onAddRightAnswer = useCallback(
    (e) => {
      e.preventDefault();

      addRightAnswers(label);
    },
    [addRightAnswers, label]
  );

  return (
    <OptionWrapper onClick={onAddRightAnswer} isRight={isRight}>
      <Text>{label}</Text>
      <DeleteOptionButton onClick={onDelete} />
    </OptionWrapper>
  );
};
