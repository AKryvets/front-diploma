import { DefaultColors } from '../colors';

import { createModalTheme } from './modalTheme';

export const defaultModal = createModalTheme({
  modalBackground: DefaultColors.secondBlue,
  modalIconColor: DefaultColors.lightBlue,
});
