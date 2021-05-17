import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { LayoutWrapper } from '../../packages';

import { Wrapper } from './styled';
import { tasksSelectors } from './selectors';
import { TaskCreatingProcessSteps } from './consts';
import { CreationForm, View } from './components';
import { tasksActions } from './store';

export const Tasks = () => {
  const dispatch = useDispatch();
  const { currentStep } = useSelector(tasksSelectors.getTasksData);

  useEffect(
    () => () => {
      dispatch(tasksActions.resetState());
    },
    [dispatch]
  );

  return (
    <LayoutWrapper>
      <Wrapper>
        {currentStep === TaskCreatingProcessSteps.View && <View />}
        {currentStep === TaskCreatingProcessSteps.Creating && <CreationForm />}
      </Wrapper>
    </LayoutWrapper>
  );
};
