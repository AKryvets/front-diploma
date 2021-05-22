import styled from 'styled-components';

import Button from '@xcritical/button';

import { Container } from '../../../../styled';
import { DefaultColors } from '../../../../theme';

export const CreateTaskButton = styled(Button)``;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const TasksListWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  flex-wrap: wrap;
`;

export const TaskViewWrapper = styled(Container)`
  margin-right: 30px;
  margin-bottom: 30px;
  cursor: pointer;
  transition: 0.5s;
  border: 1px solid ${DefaultColors.secondBlue};
  justify-content: space-between;

  &:hover {
    transform: scale(1.05);
    border: 1px solid ${DefaultColors.fifthBlue};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  width: 100%;
  background: ${({ background }) => background || DefaultColors.lightPink};
`;

export const TaskIcon = styled.img`
  width: 100px;
  margin: auto;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: #252e4b;
  transition: 0.5s;
  opacity: 0.8;
  top: -0.5px;
  left: -0.5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const FiltersWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 120px;
  min-width: 200px;
  justify-content: space-around;
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
  justify-content: space-around;
`;

export const InfoBlockWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StartButton = styled(Button)``;

export const StartButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PreviewTaskIcon = styled.img`
  width: 100px;
  margin: 0 20px 20px;
`;
