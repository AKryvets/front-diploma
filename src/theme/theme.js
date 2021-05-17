import { buttonThemeNamespace } from '@xcritical/button';
import { inputThemeNamespace } from '@xcritical/input';
import { popoverThemeNamespace } from '@xcritical/popover';
import { selectThemeNamespace } from '@xcritical/select';

import { defaultButton, secondaryButton } from './button';
import { activeInput, defaultInput } from './input';
import { defaultPopup, errorPopup } from './popup';
import { defaultSelect } from './select';

export const getTheme = () => ({
  [buttonThemeNamespace]: {
    appearance: {
      default: defaultButton,
      secondary: secondaryButton,
    },
  },
  [inputThemeNamespace]: {
    appearance: {
      default: defaultInput,
      active: activeInput,
    },
  },
  [selectThemeNamespace]: {
    appearance: {
      default: defaultSelect,
    },
  },
  [popoverThemeNamespace]: {
    appearance: {
      default: defaultPopup,
      error: errorPopup,
    },
  },
});
