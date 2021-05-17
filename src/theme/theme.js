import { buttonThemeNamespace } from '@xcritical/button';
import { inputThemeNamespace } from '@xcritical/input';
import { popoverThemeNamespace } from '@xcritical/popover';
import { selectThemeNamespace } from '@xcritical/select';

import { defaultButton, secondaryButton } from './button';
import { defaultInput } from './input';
import { defaultPopup } from './popup';
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
    },
  },
  [selectThemeNamespace]: {
    appearance: {
      default: defaultSelect,
    },
  },
  [popoverThemeNamespace]: {
    appearance: {
      error: defaultPopup,
    },
  },
});
