import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Switch from '@xcritical/switch';

import { Filter, LayoutWrapper, Loader } from '../../packages';

import { Text } from '../../styled';

import { TaskView } from './components/TaskView';

import {
  ButtonWrapper,
  ContentWrapper,
  CreateButton,
  FilterWrapper,
  FiltersWrapper,
  StatusBlock,
  StatusBlockWrapper,
  StatusPanel,
  ToolbarWrapper,
  Wrapper,
} from './styled';
import { dashboardSelectors } from './selectors';
import { dashboardActions } from './store';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const { myTasks, isReady, filters } = useSelector(
    dashboardSelectors.getDashboardData
  );

  const onFilterChange = useCallback(
    (value, e) => {
      dispatch(
        dashboardActions.setFilters({
          ...filters,
          [e.target.name]: value,
        })
      );
    },
    [dispatch, filters]
  );

  useEffect(() => {
    dispatch(dashboardActions.init());
  }, [dispatch]);

  if (!isReady) return <Loader />;

  return (
    <LayoutWrapper>
      <Wrapper>
        <ToolbarWrapper>
          <StatusPanel>
            <StatusBlockWrapper>
              <StatusBlock>
                <Text size="18px">Tasks:</Text>
              </StatusBlock>
            </StatusBlockWrapper>
            <StatusBlockWrapper>
              <StatusBlock>
                <Text size="18px">My tasks:</Text>
              </StatusBlock>
            </StatusBlockWrapper>
            <StatusBlockWrapper>
              <StatusBlock>
                <Text size="18px">Rating:</Text>
              </StatusBlock>
            </StatusBlockWrapper>
          </StatusPanel>

          <ButtonWrapper>
            <FilterWrapper>
              <Filter>
                <FiltersWrapper>
                  <Switch
                    label="Tests"
                    onChange={onFilterChange}
                    name="tests"
                    checked={filters?.tests}
                  />
                  <Switch
                    label="Practical tasks"
                    onChange={onFilterChange}
                    name="practical"
                    checked={filters?.practical}
                  />
                </FiltersWrapper>
              </Filter>
            </FilterWrapper>

            <CreateButton>+ Create task</CreateButton>
          </ButtonWrapper>
        </ToolbarWrapper>
        <ContentWrapper>
          {myTasks.map((task) => (
            <TaskView {...task} />
          ))}
        </ContentWrapper>
      </Wrapper>
    </LayoutWrapper>
  );
};
