import { DefaultColors } from '../colors';

import { createButtonTheme } from './buttonTheme';

export const defaultButton = createButtonTheme({
  background: DefaultColors.lightBlue,
  borderColor: DefaultColors.lightBlue,
  color: DefaultColors.white,
  hoverColor: DefaultColors.white,
  borderHoverColor: DefaultColors.blue,
  hoverBackground: DefaultColors.blue,
});

export const secondaryButton = createButtonTheme({
  background: DefaultColors.secondBlue,
  borderColor: DefaultColors.lightBlue,
  color: DefaultColors.lightBlue,
  hoverColor: DefaultColors.white,
  borderHoverColor: DefaultColors.blue,
  hoverBackground: DefaultColors.blue,
});
