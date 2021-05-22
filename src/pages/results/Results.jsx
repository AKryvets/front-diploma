import React, { useCallback, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '@xcritical/modal';

import Switch from '@xcritical/switch';

import { Filter, LayoutWrapper, Loader } from '../../packages';
import { Text } from '../../styled';

import { ResultSteps } from './consts';

import {
  ContentWrapper,
  FilterWrapper,
  FiltersWrapper,
  PracticalTaskInfo,
  ToolbarWrapper,
  Wrapper,
} from './styled';
import { resultsSelectors } from './selectors';
import { resultsActions } from './store';
import { TaskResult } from './TaskResult';
import { TestTask } from './test-task';

export const Results = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsOpenModal] = useState(false);
  const { results, isReady, filters, resultStep } = useSelector(
    resultsSelectors.getResultsData
  );

  useEffect(() => {
    dispatch(resultsActions.init());
  }, [dispatch]);

  const onFilterChange = useCallback(() => {
    console.log(123);
  }, []);

  if (!isReady) return <Loader />;

  if (resultStep === ResultSteps.TestTask)
    return (
      <LayoutWrapper>
        <Wrapper>
          <TestTask />
        </Wrapper>
      </LayoutWrapper>
    );

  console.log(results);

  return (
    <LayoutWrapper>
      <Wrapper>
        <ToolbarWrapper>
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
        </ToolbarWrapper>
        <ContentWrapper>
          {results.map((result) => (
            <TaskResult
              result={result}
              onResultPreview={() => setIsOpenModal(true)}
            />
          ))}
        </ContentWrapper>
      </Wrapper>
      <Modal
        isOpen={isModalOpen}
        onModalCancel={() => setIsOpenModal(false)}
        title="Result preview"
      >
        <PracticalTaskInfo>
          <Text size="18px">Task Title</Text>
          <Text size="14px">Task description</Text>
        </PracticalTaskInfo>
        <PracticalTaskInfo>
          <Text size="18px">Your solution:</Text>
          <Text size="14px">
            dasd das ddasd das dasd fafd asdasd asddddddddd asdasd gggggggg asds
            assssss ddddddd asd ds asd asd asd
          </Text>
        </PracticalTaskInfo>
        <PracticalTaskInfo>
          <Text size="18px">Right solution:</Text>
          <Text size="14px">
            dasd das ddasd das dasd fafd asdasd asddddddddd asdasd gggggggg asds
            assssss ddddddd asd ds asd asd asd
          </Text>
        </PracticalTaskInfo>
      </Modal>
    </LayoutWrapper>
  );
};
