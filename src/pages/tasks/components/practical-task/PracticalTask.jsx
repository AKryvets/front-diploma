import React, { useCallback, useState } from 'react';

import { useSelector } from 'react-redux';

import StarIcon from 'mdi-react/StarIcon';

import Button from '@xcritical/button';

import { Modal } from '@xcritical/modal';

import { Text } from '../../../../styled';
import { DefaultColors } from '../../../../theme';

import { tasksSelectors } from '../../selectors';

import {
  ButtonsWrapper,
  CheckButtonButton,
  FooterWrapper,
  InfoBlockContainer,
  InfoWrapper,
  ResultModalButtonsWrapper,
  ResultModalWrapper,
  StarsWrapper,
  StopTimerButton,
  Textarea,
  TimerIcon,
  TimerText,
  TimerWrapper,
  TitleWrapper,
  WorkSpaceContainer,
  Wrapper,
} from './styled';

export const PracticalTask = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    previewTask = {
      title: 'hello',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mauris nisi, vehicula vitae lectus eu, varius aliquam purus. Curabitur mauris lacus, sollicitudin ut vestibulum elementum, malesuada eu erat. Morbi luctus in ex sit amet sagittis. Morbi id sagittis sem. Aliquam dignissim imperdiet elit sed rhoncus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In id est sit amet sem hendrerit sollicitudin eget non magna. Mauris porta nisi vel metus vehicula posuere. Etiam mi dui, laoreet sed lobortis nec, lobortis et lectus. Vivamus ut leo magna. Fusce lacinia lacus massa, a convallis diam viverra scelerisque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer nec vehicula diam.\n',
      timeLimit: 10,
    },
  } = useSelector(tasksSelectors.getCreateTaskFormData);

  const onCheckButton = useCallback(() => {
    setIsModalOpen(true);
  });

  return (
    <Wrapper>
      <InfoBlockContainer>
        <InfoWrapper>
          <TitleWrapper>
            <Text size="24px">{previewTask.title}</Text>
            <StarsWrapper>
              <StarIcon color={DefaultColors.lightBlue} />
              <StarIcon color={DefaultColors.lightBlue} />
              <StarIcon color={DefaultColors.lightBlue} />
              <StarIcon />
              <StarIcon />
            </StarsWrapper>
          </TitleWrapper>
          <Text size="18px">{previewTask.description}</Text>
        </InfoWrapper>
        <FooterWrapper>
          <TimerWrapper>
            <TimerIcon size={30} />
            <TimerText>{`${previewTask.timeLimit}:00`}</TimerText>
          </TimerWrapper>
          <ButtonsWrapper>
            <StopTimerButton appearance="secondary">Stop timer</StopTimerButton>
            <CheckButtonButton onClick={onCheckButton}>
              Check the solution
            </CheckButtonButton>
          </ButtonsWrapper>
        </FooterWrapper>
      </InfoBlockContainer>
      <WorkSpaceContainer>
        <Textarea placeholder="Write your solution here" />
      </WorkSpaceContainer>
      <Modal
        isOpen={isModalOpen}
        onModalCancel={() => setIsModalOpen(false)}
        title="Result"
        iconClose={<div />}
      >
        <ResultModalWrapper>
          <Text size="24px">{`Your mark: ${90}/100`}</Text>
          <ResultModalButtonsWrapper>
            <Button appearance="secondary">More info</Button>
            <Button>Go to task list</Button>
          </ResultModalButtonsWrapper>
        </ResultModalWrapper>
      </Modal>
    </Wrapper>
  );
};
