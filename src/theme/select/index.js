import { DefaultColors } from '../colors';

import { createSelectTheme } from './selectTheme';

export const defaultSelect = createSelectTheme({
  selectBackground: DefaultColors.secondBlue,
  selectBorderColor: DefaultColors.firstBlue,
  selectColor: DefaultColors.lightPink,
  selectBorderHoverColor: DefaultColors.lightBlue,
});
