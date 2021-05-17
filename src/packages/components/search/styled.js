import styled from 'styled-components';

import { DefaultColors } from '../../../theme/colors';

export const SearchWrapper = styled.div`
  display: flex;
`;

export const SearchButton = styled.div`
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  cursor: pointer;

  svg {
    fill: ${DefaultColors.lightBlue};
  }
`;
