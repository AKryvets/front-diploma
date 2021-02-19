import React from "react";
import { LoginPageWrapper, LogoTitle } from "./styles";
import { LogoBlock, AnimationBlock } from "./components";
import { AuthBlock } from "./styles";
import { useWindowDimensions } from "../../packages/utils";

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
