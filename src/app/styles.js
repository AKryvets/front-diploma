import { createGlobalStyle } from 'styled-components';

import { DefaultColors } from '../theme';

const colors = {
  primaryBackground: DefaultColors.firstBlue,
  defaultTextColor: DefaultColors.lightPink,
};

export const GlobalStyle = createGlobalStyle`
  body {
    background: ${colors.primaryBackground};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${colors.defaultTextColor};
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 14px;
    line-height: 1.8;
  }
  * {
    font-family: 'Montserrat', sans-serif;
  }
`;
