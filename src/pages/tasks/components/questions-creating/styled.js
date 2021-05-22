import styled from 'styled-components';

import PlusThickIcon from 'mdi-react/PlusThickIcon';
import HospitalIcon from 'mdi-react/HospitalIcon';

import { Container, LabelWrapper } from '../../../../styled';
import { DefaultColors } from '../../../../theme';

export const Wrapper = styled.div`
  display: flex;
  min-width: 500px;
  position: relative;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const HeaderTitle = styled(LabelWrapper)`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
`;

export const FormFieldWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QuestionsWrapper = styled(Container)`
  background: ${DefaultColors.sixBlue};
  border-radius: 10px;
`;

export const CreatedQuestionWrapper = styled(Container)`
  background: ${DefaultColors.sixBlue};
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const OptionsWrapper = styled(Container)`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const OptionsHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  :first-child {
    div {
      width: 100%;
    }
  }
`;

export const AddOptionButton = styled(PlusThickIcon)`
  @keyframes pulse {
    0% {
      transform: scale(0.9);
    }

    70% {
      transform: scale(1.1);
    }

    100% {
      transform: scale(0.9);
    }
  }

  transition: 0.5s;
  position: absolute;
  right: 17px;
  top: 17px;
  cursor: pointer;
  transform: scale(1.1);
  animation: pulse 1s infinite;
  fill: ${DefaultColors.lightBlue};

  &:hover {
    fill: ${DefaultColors.blue};
  }
`;

export const OptionsListWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const OptionWrapper = styled(Container)`
  background: ${({ isRight }) =>
    isRight ? DefaultColors.green : DefaultColors.lightBlue};
  min-width: 10px;
  padding: 5px 7px;
  max-width: fit-content;
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;

  div {
    color: white;
  }
`;

export const DeleteOptionButton = styled(HospitalIcon)`
  fill: ${DefaultColors.lightRed};
  margin-left: 5px;
  transform: rotate(45deg);
  cursor: pointer;
`;

export const DeleteQuestionButton = styled(HospitalIcon)`
  fill: ${DefaultColors.lightRed};
  margin-left: 5px;
  transform: rotate(45deg);
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 10px;
`;
