import React from 'react';

import { useWindowDimensions } from '../../packages/utils';

import { AnimationBlock } from '../../packages/components';

import { AuthBlock, LoginPageWrapper, LogoTitle, MarginBlock } from './styled';
import { LogoBlock } from './components';

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
      <MarginBlock />
    </LoginPageWrapper>
  );
};
