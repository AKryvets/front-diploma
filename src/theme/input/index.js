import { DefaultColors } from '../colors';

import { createInputTheme } from './inputTheme';

export const defaultInput = createInputTheme({
  background: DefaultColors.secondBlue,
  borderColor: DefaultColors.firstBlue,
  color: DefaultColors.lightPink,
  hoverBorderColor: DefaultColors.firstBlue,
  invalidBorder: DefaultColors.red,
});
