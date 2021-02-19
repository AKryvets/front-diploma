import { mergeTheme } from '../mergeTheme';

describe('mergeTheme function', () => {
  it('merge two objects with different background and get second object background', () => {
    const defaultTheme = {
      height: 45,
      lineHeight: 45,
      background: 'green',
      border: '1px solid #252e4b',
      fontSize: 14,
      color: 'green',
      borderRadius: 10,
      outline: 'none',
      boxSizing: 'border-box',
    };

    const customTheme = {
      background: 'red',
    };

    const mergedTheme = {
      height: 45,
      lineHeight: 45,
      background: 'red',
      border: '1px solid #252e4b',
      fontSize: 14,
      color: 'green',
      borderRadius: 10,
      outline: 'none',
      boxSizing: 'border-box',
    };

    expect(mergeTheme(defaultTheme, customTheme)).toEqual(mergedTheme);
  });

  it('merge two objects with completely different fields and get object with fields of both object', () => {
    const defaultTheme = {
      height: 45,
      lineHeight: 45,
      background: 'green',
    };

    const customTheme = {
      border: '1px solid #252e4b',
      fontSize: 14,
      color: 'green',
      borderRadius: 10,
      outline: 'none',
      boxSizing: 'border-box',
    };

    const mergedTheme = {
      height: 45,
      lineHeight: 45,
      background: 'green',
      border: '1px solid #252e4b',
      fontSize: 14,
      color: 'green',
      borderRadius: 10,
      outline: 'none',
      boxSizing: 'border-box',
    };

    expect(mergeTheme(defaultTheme, customTheme)).toEqual(mergedTheme);
  });
});
