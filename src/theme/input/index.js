import { DefaultColors } from '../colors';

import { createInputTheme } from './inputTheme';

export const defaultInput = createInputTheme({
  background: DefaultColors.secondBlue,
  borderColor: DefaultColors.firstBlue,
  color: DefaultColors.lightPink,
  hoverBorderColor: DefaultColors.lightBlue,
  invalidBorder: DefaultColors.red,
});

export const activeInput = createInputTheme({
  background: DefaultColors.secondBlue,
  borderColor: DefaultColors.lightBlue,
  color: DefaultColors.lightPink,
  hoverBorderColor: DefaultColors.lightBlue,
  invalidBorder: DefaultColors.red,
});
