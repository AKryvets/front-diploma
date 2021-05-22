export const createButtonTheme = ({
  background,
  borderColor,
  color,
  hoverColor,
  borderHoverColor,
  hoverBackground,
}) => ({
  background,
  borderColor,
  height: 35,
  fontWeight: 500,
  color,
  span: {
    display: 'flex',
    alignItems: 'center',
  },
  svg: {
    marginRight: 5,
  },
  hover: {
    background: hoverBackground,
    color: hoverColor,
    borderColor: borderHoverColor,
  },
  active: {
    background: hoverBackground,
    color: hoverColor,
    borderColor: borderHoverColor,
  },
  focus: {
    background: hoverBackground,
    color: hoverColor,
    borderColor: borderHoverColor,
  },
  selected: {
    background: hoverBackground,
    color: hoverColor,
    borderColor: borderHoverColor,
  },
});
