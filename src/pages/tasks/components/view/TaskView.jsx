import React, { memo, useCallback } from 'react';

import TrashCanIcon from 'mdi-react/TrashCanIcon';
import PencilIcon from 'mdi-react/PencilIcon';
import EyeOutlineIcon from 'mdi-react/EyeOutlineIcon';

import { useDispatch } from 'react-redux';

import { Text } from '../../../../styled';

import { TasksIconByType, TasksTypes } from '../../../../const';

import { DefaultColors } from '../../../../theme';

import { tasksActions } from '../../store';

import {
  DeleteButton,
  EditButton,
  IconWrapper,
  TaskIcon,
  TaskViewButtonWrapper,
  TaskViewWrapper,
  ViewButton,
} from './styled';

export const TaskView = memo(
  ({ title, description, type, author, questions, _id }) => {
    const dispatch = useDispatch();

    const onDeleteButtonClick = useCallback(
      (e) => {
        e.preventDefault();

        dispatch(tasksActions.deleteTask(_id));
      },
      [dispatch, _id]
    );

    return (
      <TaskViewWrapper width="200px">
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
        <Text>{`Author: ${author.firstName} ${author.lastName}`}</Text>
        <TaskViewButtonWrapper>
          <DeleteButton onClick={onDeleteButtonClick}>
            <TrashCanIcon />
          </DeleteButton>
          <ViewButton>
            <EyeOutlineIcon />
          </ViewButton>
          <EditButton>
            <PencilIcon />
          </EditButton>
        </TaskViewButtonWrapper>
      </TaskViewWrapper>
    );
  }
);
