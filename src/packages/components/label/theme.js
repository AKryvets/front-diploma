import { mergeTheme } from '../../utils';

const colors = {
  defaultTextColor: '#8c91b6',
};

export const labelTheme = {
  default: {
    color: `${colors.defaultTextColor} !important`,
    marginBottom: '8px !important',
    fontSize: '14px !important',
    fontWeight: '400 !important',
    fontStyle: 'normal !important',
  },
};

export const getLabelTheme = (appearance) => {
  const theme = labelTheme[appearance];
  if (theme) return mergeTheme(labelTheme.default, theme);

  return labelTheme.default;
};
