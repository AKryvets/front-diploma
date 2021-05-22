import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { TasksIconByType, TasksTypes } from '../../../../const';

import { Text } from '../../../../styled';
import { tasksSelectors } from '../../selectors';

import {
  InfoBlockWrapper,
  ModalContentWrapper,
  PreviewTaskIcon,
  StartButton,
  StartButtonWrapper,
} from './styled';

export const PreviewModal = memo(() => {
  const { previewTask } = useSelector(tasksSelectors.getTasksData);

  const isTest = previewTask?.type === TasksTypes.Test;

  return (
    <>
      <ModalContentWrapper>
        <PreviewTaskIcon
          src={TasksIconByType[previewTask?.type] ?? TasksIconByType.Practical}
        />
        <InfoBlockWrapper>
          <Text size="18px">{`Title: ${previewTask?.title}`}</Text>
          <Text>{`Type: ${previewTask?.type}`}</Text>
          <Text>{`Author: ${previewTask?.author.firstName} ${previewTask?.author.lastName}`}</Text>
          {isTest && (
            <Text>{`Questions count: ${previewTask?.questions?.length}`}</Text>
          )}
          <Text>{`Time limit: ${previewTask?.timeLimit} minutes`}</Text>
          <Text>{`Number of attempts: ${previewTask?.numberOfAttempts}`}</Text>
        </InfoBlockWrapper>
      </ModalContentWrapper>
      <StartButtonWrapper>
        <StartButton>Start</StartButton>
      </StartButtonWrapper>
    </>
  );
});
