import React from 'react';

import { Wrapper } from './styled';
import { Header } from './Header';
import { Sidebar } from './Sidebar';

export const LayoutWrapper = ({ children }) => {
  console.log(123);

  return (
    <Wrapper>
      <Header />
      <Sidebar />
      {children}
    </Wrapper>
  );
};
