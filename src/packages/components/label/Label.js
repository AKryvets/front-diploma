import styled from 'styled-components';

import { getLabelTheme } from './theme';

export const Label = styled.label`
  ${({ appearance }) => getLabelTheme(appearance)}
`;
