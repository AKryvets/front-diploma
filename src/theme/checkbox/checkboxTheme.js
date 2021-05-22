export const createCheckboxTheme = ({
  checkboxBackground,
  checkboxColor,
  checkboxBorderColor,
  checkboxBackgroundChecked,
}) => ({
  checkboxLabel: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  checkboxWrapper: {
    backgroundColor: checkboxBackground,
    paddingBottom: '4px',
    paddingLeft: '4px',
    paddingRight: '4px',
    paddingTop: '4px',
    borderRadius: '4px',
    color: checkboxColor,
    border: `1px solid ${checkboxBorderColor}`,
    marginTop: 10,
  },
  checkbox: {
    backgroundColor: checkboxBackgroundChecked,
    borderRadius: '4px',
    width: '16px',
    height: '16px',
    transition: 'background-color 0.1s ease-in-out',
    color: 'red',
    userSelect: 'none',
  },
  labelWrapper: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '10px',
  },
  switchGroupWrapper: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingBottom: '10px',
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingTop: '10px',
  },
});
