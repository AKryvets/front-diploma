import styled from 'styled-components';

import { DefaultColors } from '../../../theme/colors';
import { Container } from '../../../styled';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export const TaskViewWrapper = styled(Container)`
  margin-right: 30px;
  margin-bottom: 30px;
  cursor: pointer;
  transition: 0.5s;
  border: 1px solid ${DefaultColors.secondBlue};
  justify-content: space-between;
  opacity: ${({ notActive }) => (notActive ? '0.5' : 1)};

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

export const DeleteButton = styled.div`
  border: 1px solid ${DefaultColors.red};
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${DefaultColors.secondBlue};
  }

  svg {
    fill: ${DefaultColors.red};
  }
`;

export const EditButton = styled.div`
  border: 1px solid ${DefaultColors.lightBlue};
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    border: 1px solid ${DefaultColors.secondBlue};
  }

  svg {
    fill: ${DefaultColors.lightBlue};
  }
`;

export const TaskViewButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
