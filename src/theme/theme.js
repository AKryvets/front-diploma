import { buttonThemeNamespace } from '@xcritical/button';
import { inputThemeNamespace } from '@xcritical/input';
import { popoverThemeNamespace } from '@xcritical/popover';

import { defaultButton } from './button';
import { defaultInput } from './input';
import { defaultPopup } from './popup';

export const getTheme = () => ({
  [buttonThemeNamespace]: {
    appearance: {
      default: defaultButton,
    },
  },
  [inputThemeNamespace]: {
    appearance: {
      default: defaultInput,
    },
  },
  [popoverThemeNamespace]: {
    appearance: {
      error: defaultPopup,
    },
  },
});
