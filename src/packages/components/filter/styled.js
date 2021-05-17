import styled from 'styled-components';

import { DefaultColors } from '../../../theme';

export const FilterButton = styled.div`
  padding: 8px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid ${DefaultColors.secondBlue};
  cursor: pointer;

  &:hover {
    border: 1px solid ${DefaultColors.lightBlue};
  }

  svg {
    fill: ${DefaultColors.lightBlue};
  }
`;
