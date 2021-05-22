export const createModalTheme = ({ modalBackground, modalIconColor }) => ({
  content: {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    top: '20%',
    minWidth: '500px',
    maxWidth: '700px',
    zIndex: 999,
    borderRadius: '5px',
    backgroundColor: modalBackground,
    boxShadow: '0 5px 10px 0 rgba(0,0,0,.2), 0 0 0 0 rgba(0,0,0,.12)',
  },
  headerWrapper: {
    padding: '15px',
    display: 'flex',
    alignItems: 'center',
  },
  iconClose: {
    width: '25px',
    height: '25px',
    cursor: 'pointer',
    marginLeft: 'auto',
    color: modalIconColor,
  },
  header: {
    fontSize: '16px',
  },
  body: {
    padding: '15px',
  },
});
