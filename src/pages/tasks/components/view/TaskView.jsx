import React, { memo, useCallback, useState } from 'react';

import EyeOutlineIcon from 'mdi-react/EyeOutlineIcon';

import { Text } from '../../../../styled';

import { TasksIconByType, TasksTypes } from '../../../../const';

import { DefaultColors } from '../../../../theme';

import { IconWrapper, Overlay, TaskIcon, TaskViewWrapper } from './styled';

export const TaskView = memo(({ onTaskPreview, ...task }) => {
  const { title, type, author } = task;
  const [isOverlay, setIsOverlay] = useState();

  const showOverlay = useCallback(() => {
    setIsOverlay(true);
  }, [setIsOverlay]);

  const hideOverlay = useCallback(() => {
    setIsOverlay(false);
  }, [setIsOverlay]);

  const showPreviewModal = useCallback(() => {
    onTaskPreview(task);
  }, [onTaskPreview, task]);

  return (
    <TaskViewWrapper
      width="200px"
      onMouseLeave={hideOverlay}
      onMouseEnter={showOverlay}
    >
      {isOverlay ? (
        <Overlay onClick={showPreviewModal}>
          <EyeOutlineIcon size={50} />
          <Text size="18px">Preview</Text>
        </Overlay>
      ) : null}
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
      <Text>{`Type: ${type} tasks`}</Text>
      <Text>{`Author: ${author.firstName} ${author.lastName}`}</Text>
    </TaskViewWrapper>
  );
});
