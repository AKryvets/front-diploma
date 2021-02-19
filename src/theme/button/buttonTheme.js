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
  hover: {
    background: hoverBackground,
    color: hoverColor,
    borderColor: borderHoverColor,
  },
});
