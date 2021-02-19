export const createInputTheme = ({
  background,
  borderColor,
  color,
  hoverBorderColor,
  invalidBorder,
}) => ({
  background,
  borderColor,
  borderRadius: 3,
  minHeight: 45,
  padding: '0 12px',
  input: {
    background,
    borderColor,
    color,
  },
  hover: {
    borderColor: hoverBorderColor,
  },
  focus: {
    borderColor: hoverBorderColor,
  },
  active: {
    borderColor: hoverBorderColor,
  },
  disabled: {
    borderColor: hoverBorderColor,
  },
  invalid: {
    borderColor: invalidBorder,
  },
});
