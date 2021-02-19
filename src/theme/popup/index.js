import { DefaultColors } from '../colors';

import { createPopupTheme } from './popupTheme';

export const defaultPopup = createPopupTheme({
  background: DefaultColors.red,
  borderColor: DefaultColors.red,
  color: DefaultColors.white,
});
