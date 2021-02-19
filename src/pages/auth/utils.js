export const openWindowForAuth = (url) => {
  window.open(
    url,
    'Popup',
    'toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30'
  );
};
