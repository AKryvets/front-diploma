import { DefaultColors } from '../colors';

import { createPopupTheme } from './popupTheme';

export const defaultPopup = createPopupTheme({
  background: DefaultColors.secondBlue,
  borderColor: DefaultColors.lightBlue,
  color: DefaultColors.white,
});

export const errorPopup = createPopupTheme({
  background: DefaultColors.red,
  borderColor: DefaultColors.red,
  color: DefaultColors.white,
});
