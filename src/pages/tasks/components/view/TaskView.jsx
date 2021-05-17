import React from 'react';

import TrashCanIcon from 'mdi-react/TrashCanIcon';
import PencilIcon from 'mdi-react/PencilIcon';
import EyeOutlineIcon from 'mdi-react/EyeOutlineIcon';

import { Text } from '../../../../styled';

import { TasksIconByType, TasksTypes } from '../../../../const';

import { DefaultColors } from '../../../../theme';

import {
  DeleteButton,
  EditButton,
  IconWrapper,
  TaskIcon,
  TaskViewButtonWrapper,
  TaskViewWrapper,
  ViewButton,
} from './styled';

export const TaskView = ({ title, description, type, creatorId }) => {
  console.log(123);

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
      <Text>Type: {type} tasks</Text>
      <Text>Author: {creatorId}</Text>
      <TaskViewButtonWrapper>
        <DeleteButton>
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
};
