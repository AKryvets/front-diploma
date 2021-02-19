export const createPopupTheme = ({ color, background, borderColor }) => ({
  content: {
    padding: '10px',
    boxShadow: '0 5px 20px 0 rgba(0, 0, 0, 0.2)',
    color,
    border: 0,
    backgroundColor: background,
    zIndex: 999,
    borderRadius: 3,
    whiteSpace: 'pre-wrap',
  },
  arrow: {
    background,
    border: {
      width: '1px',
      color: borderColor,
    },
  },
});
