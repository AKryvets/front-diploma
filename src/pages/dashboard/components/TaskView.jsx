import React, { memo, useCallback } from 'react';

import TrashCanIcon from 'mdi-react/TrashCanIcon';
import PencilIcon from 'mdi-react/PencilIcon';

import { useDispatch } from 'react-redux';

import { tasksActions } from '../../tasks/store';
import { TasksIconByType, TasksTypes } from '../../../const';
import { DefaultColors } from '../../../theme/colors';
import { Text } from '../../../styled';

import {
  DeleteButton,
  EditButton,
  IconWrapper,
  TaskIcon,
  TaskViewButtonWrapper,
  TaskViewWrapper,
} from './styled';

export const TaskView = memo(({ title, description, type, questions, _id }) => {
  const dispatch = useDispatch();

  const onDeleteButtonClick = useCallback(
    (e) => {
      e.preventDefault();

      dispatch(tasksActions.deleteTask(_id));
    },
    [dispatch, _id]
  );

  return (
    <TaskViewWrapper
      width="200px"
      notActive={type === TasksTypes.Test && !questions?.length}
    >
      <IconWrapper
        background={
          TasksTypes.Test === type
            ? DefaultColors.lightPink
            : DefaultColors.beige
        }
      >
        <TaskIcon src={TasksIconByType[type] ?? TasksIconByType.Practical} />
      </IconWrapper>
      <Text size="18px">{title}</Text>
      <Text>{description}</Text>
      <Text>{`Type: ${type} tasks`}</Text>
      {TasksTypes.Test === type && (
        <Text>{`Questions: ${questions.length}`}</Text>
      )}
      <TaskViewButtonWrapper>
        <DeleteButton onClick={onDeleteButtonClick}>
          <TrashCanIcon />
        </DeleteButton>
        <EditButton>
          <PencilIcon />
        </EditButton>
      </TaskViewButtonWrapper>
    </TaskViewWrapper>
  );
});
