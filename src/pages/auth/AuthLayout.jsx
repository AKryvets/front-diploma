import React from 'react';

import { useWindowDimensions } from '../../packages/utils';

import { AuthBlock, LoginPageWrapper, LogoTitle } from './styles';
import { AnimationBlock, LogoBlock } from './components';

export const AuthLayout = ({ children }) => {
  const { width } = useWindowDimensions();

  return (
    <LoginPageWrapper>
      <AnimationBlock />
      <LogoBlock />
      <AuthBlock>
        {width <= 900 && <LogoTitle>DevCoach</LogoTitle>}
        {children}
      </AuthBlock>
    </LoginPageWrapper>
  );
};
