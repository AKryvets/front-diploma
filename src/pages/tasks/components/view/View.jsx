import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Switch from '@xcritical/switch';

import { tasksActions } from '../../store';
import { TaskCreatingProcessSteps } from '../../consts';

import { Container } from '../../../../styled';

import { tasksSelectors } from '../../selectors';

import { Filter, Loader, Search } from '../../../../packages';

import {
  ButtonsWrapper,
  CreateTaskButton,
  FiltersWrapper,
  TasksListWrapper,
  Wrapper,
} from './styled';

import { TaskView } from './TaskView';

export const View = () => {
  const dispatch = useDispatch();
  const { isReady, tasks, filters } = useSelector(tasksSelectors.getTasksData);

  const onCreateTaskButtonClick = useCallback(() => {
    dispatch(tasksActions.setCurrentStep(TaskCreatingProcessSteps.Creating));
  }, [dispatch]);

  const onSearchButtonClick = useCallback(
    (searchText) => {
      dispatch(tasksActions.search(searchText));
    },
    [dispatch]
  );

  const onFilterChange = useCallback(
    (value, e) => {
      dispatch(
        tasksActions.setFilters({
          ...filters,
          [e.target.name]: value,
        })
      );
    },
    [dispatch, filters]
  );

  useEffect(() => {
    dispatch(tasksActions.initView());
  }, []);

  return (
    <Wrapper>
      <Container>
        <ButtonsWrapper>
          <Filter>
            <FiltersWrapper>
              <Switch
                label="Only my tasks"
                onChange={onFilterChange}
                name="creatorId"
                checked={filters?.creatorId}
              />
              <Switch
                label="Only tests"
                onChange={onFilterChange}
                name="tests"
                checked={filters?.tests}
              />
              <Switch
                label="Only practical"
                onChange={onFilterChange}
                name="practical"
                checked={filters?.practical}
              />
            </FiltersWrapper>
          </Filter>
          <Search onSearch={onSearchButtonClick} />
          <CreateTaskButton onClick={onCreateTaskButtonClick}>
            + Create task
          </CreateTaskButton>
        </ButtonsWrapper>
      </Container>
      {isReady ? (
        <TasksListWrapper>
          {tasks.map((task) => (
            <TaskView {...task} />
          ))}
        </TasksListWrapper>
      ) : (
        <Loader />
      )}
    </Wrapper>
  );
};
