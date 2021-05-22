import { buttonThemeNamespace } from '@xcritical/button';
import { checkboxThemeNamespace } from '@xcritical/checkbox';
import { inputThemeNamespace } from '@xcritical/input';
import { modalThemeNamespace } from '@xcritical/modal';
import { popoverThemeNamespace } from '@xcritical/popover';
import { selectThemeNamespace } from '@xcritical/select';

import { defaultButton, secondaryButton } from './button';
import { defaultCheckbox } from './checkbox';
import { activeInput, defaultInput } from './input';
import { defaultModal } from './modal';
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
  [modalThemeNamespace]: {
    appearance: {
      default: defaultModal,
    },
  },
  [checkboxThemeNamespace]: {
    appearance: {
      default: defaultCheckbox,
    },
  },
});
