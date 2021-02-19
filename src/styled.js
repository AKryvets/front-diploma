import styled from 'styled-components';
import { Link as LinkDOM } from 'react-router-dom';

import { DefaultColors } from './theme/colors';

export const Link = styled(LinkDOM)`
  color: ${DefaultColors.lightBlue};
  outline: none;
`;
