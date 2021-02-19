import merge from 'deepmerge';

export const mergeTheme = (defaultTheme, theme) => merge(defaultTheme, theme);
