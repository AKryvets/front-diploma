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

export const ViewButton = styled.div`
  border: 1px solid ${DefaultColors.blue};
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 10px;

  &:hover {
    border: 1px solid ${DefaultColors.secondBlue};
  }

  svg {
    fill: ${DefaultColors.blue};
  }
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

export const FiltersWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  min-height: 120px;
  min-width: 200px;
  justify-content: space-around;
`;
