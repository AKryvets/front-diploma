import React, { useEffect } from 'react';
import queryString from 'query-string';

export const LoginGoogle = () => {
  const googleAuth = url => {
    window.open(url,
      'Popup',
      'toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30');
  };
  const onClickHandler = () => {
    fetch('http://localhost:8000/api/auth/login/google').then(response => response.json()).then(data => googleAuth(data));
  };

  useEffect(() => {
    const { code } = queryString.parse(window.location.search);
    fetch(`http://localhost:8000/api/auth/confirm-login/google?code=${code}`).then(response => response.json()).then(data => console.log(data));
  }, []);

  return (
    <>
      <button onClick={onClickHandler}>login google</button>
    </>
  );
};
