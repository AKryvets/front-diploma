export const createSelectTheme = ({
  selectBackground,
  selectColor,
  selectBorderColor,
  selectBorderHoverColor,
}) => ({
  background: selectBackground,
  color: selectColor,
  width: '100%',
  height: '40px',
  zIndex: 100,
  borderColor: selectBorderColor,
  placeholder: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    'div:first-child': {
      height: '23px',
      padding: '0px 0px 2px 3px',
    },
    height: '40px',
    padding: '0',
    color: selectColor,
    background: selectBackground,
    borderColor: selectBorderColor,
    fontSize: 14,
    active: {
      background: selectBackground,
    },
    focus: {
      background: selectBackground,
    },
    selected: {
      background: selectBackground,
    },

    hover: {
      color: selectColor,
      background: selectBackground,
      borderColor: selectBorderHoverColor,
      cursor: 'pointer',
    },
  },
  option: {
    width: '100%',
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    color: selectColor,
    background: selectBackground,
    cursor: 'pointer',
    fontSize: 14,
    hover: {
      background: selectBackground,
      color: selectColor,
    },
    active: {
      background: selectBackground,
      borderColor: selectBorderColor,
    },
    focus: {
      background: selectBackground,
    },
    selected: {
      background: selectBackground,
    },
  },
  disabled: {
    color: selectColor,
    background: selectBackground,
    opacity: 0.65,
  },
  singleValue: {
    height: '40px',
    color: selectColor,
    background: selectBackground,
    hover: {
      color: selectColor,
      background: selectBackground,
    },
  },
  indicatorSeparator: {
    background: selectBackground,
    display: 'none',
  },
  dropdownIndicator: {
    background: selectBackground,
    padding: '0 18px 0 5px',
    cursor: 'pointer',
  },
  dropdown: {
    background: selectBackground,
    hover: {
      background: selectBackground,
      color: selectBorderColor,
    },
    zIndex: 9999,
  },
});
