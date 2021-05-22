import styled from 'styled-components';

import ClockTimeSevenIcon from 'mdi-react/ClockTimeSevenIcon';

import Button from '@xcritical/button';

import { Container, LabelWrapper } from '../../../../styled';
import { DefaultColors } from '../../../../theme';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 100%;
  height: 95vh;
  justify-content: space-between;
`;

export const WorkSpaceContainer = styled(Container)`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 50%;
  height: 100%;
`;

export const InfoBlockContainer = styled(Container)`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 45%;
  margin-left: 20px;
  height: 100%;
  justify-content: space-between;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 100%;
  padding: 15px;
  background: ${DefaultColors.sevenBlue};
  border: none;
  font-size: 16px;
  color: ${DefaultColors.lightPink};
  outline: none;
  resize: none;
`;

export const InfoWrapper = styled.div``;

export const TitleWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
  justify-content: space-between;
  align-items: center;
`;
export const StarsWrapper = styled.div``;

export const FooterWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const TimerWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 35px;
  align-items: center;
`;

export const TimerText = styled(LabelWrapper)`
  display: flex;
  font-size: 30px;
`;

export const TimerIcon = styled(ClockTimeSevenIcon)`
  margin-right: 5px;
  color: ${DefaultColors.lightBlue};
`;

export const StopTimerButton = styled(Button)`
  padding: 27px;
  font-size: 18px;
`;

export const CheckButtonButton = styled(Button)`
  padding: 27px;
  font-size: 18px;
`;

export const ResultModalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ResultModalButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
`;
