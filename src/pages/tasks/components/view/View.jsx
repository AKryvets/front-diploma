import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { tasksActions } from '../../store';
import { TaskCreatingProcessSteps } from '../../consts';

import { Container } from '../../../../styled';

import { tasksSelectors } from '../../selectors';

import {
  ButtonsWrapper,
  CreateTaskButton,
  FilterButton,
  TasksListWrapper,
  Wrapper,
} from './styled';
import { TaskView } from './TaskView';

export const View = () => {
  const dispatch = useDispatch();
  const { isReady, tasks } = useSelector(tasksSelectors.getTasksData);

  const onCreateTaskButtonClick = useCallback(() => {
    dispatch(tasksActions.setCurrentStep(TaskCreatingProcessSteps.Creating));
  }, [dispatch]);

  useEffect(() => {
    dispatch(tasksActions.initView());
  }, []);

  if (!isReady) return null;

  return (
    <Wrapper>
      <Container>
        <ButtonsWrapper>
          <FilterButton>Filter</FilterButton>
          <CreateTaskButton onClick={onCreateTaskButtonClick}>
            Create task
          </CreateTaskButton>
        </ButtonsWrapper>
      </Container>
      <TasksListWrapper>
        {tasks.map((task) => (
          <TaskView {...task} />
        ))}
      </TasksListWrapper>
    </Wrapper>
  );
};
