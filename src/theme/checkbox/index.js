import { DefaultColors } from '../colors';

import { createCheckboxTheme } from './checkboxTheme';

export const defaultCheckbox = createCheckboxTheme({
  checkboxBackground: DefaultColors.secondBlue,
  checkboxBorderColor: DefaultColors.firstBlue,
  checkboxColor: DefaultColors.lightPink,
  checkboxBackgroundChecked: DefaultColors.lightBlue,
});
