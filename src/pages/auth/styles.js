import styled from 'styled-components';

import { DefaultColors } from '../../theme';

export const LoginPageWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

export const AnimationBlockWrapper = styled.div`
  position: relative;
`;

export const FormFieldWrapper = styled.div`
  margin-bottom: 20px;
`;

export const AuthBlock = styled.div`
  display: flex;
  flex-direction: column;
  background: ${DefaultColors.secondBlue};
  height: 100%;
  padding: 60px 60px 0 60px;
  position: fixed;
  right: 60px;
  box-sizing: border-box;
  min-width: 320px;
  width: 500px;

  @media (max-width: 400px) {
    padding: 60px 15px 0 15px;
  }

  @media (max-width: 1024px) {
    right: 0px;
  }

  @media (min-width: 1024px) {
    right: 100px;
  }

  @media (min-width: 1300px) {
    right: 200px;
  }

  @media (min-width: 1700px) {
    right: 300px;
  }
`;

export const SignInTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  margin: 0;
  line-height: 1.5;
  color: ${DefaultColors.lightPink};
`;

export const LabelWrapper = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 20px;
  color: ${DefaultColors.lightPink};
`;

export const SubmitWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LoginFooter = styled.div`
  border-top: 1px solid #252e4b;
  margin-top: 15px;
  padding-top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

export const SignUpLink = styled(LabelWrapper)`
  color: #50b5ff;
  margin-left: 5px;
  :hover {
    cursor: pointer;
  }
`;

export const AnimationWrapper = styled.div``;

export const CircleSmall = styled.div`
  animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
  animation-delay: 0s;
  position: absolute;
  top: 200px;
  left: -150px;
  background: #34416d;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  opacity: 0.4;
  animation: pulsate 3s ease-in-out infinite alternate;
`;

export const CircleMedium = styled.div`
  animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
  animation-delay: 0.3s;
  position: absolute;
  top: 50px;
  left: -300px;
  background: #303f6b;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  opacity: 0.3;
  animation: pulsate 3s ease-in-out infinite alternate;
`;

export const CircleLarge = styled.div`
  animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
  animation-delay: 0.6s;
  position: absolute;
  top: -100px;
  left: -450px;
  background: #3d4d82;
  width: 900px;
  height: 900px;
  border-radius: 50%;
  opacity: 0.2;
  animation: pulsate 3s ease-in-out infinite alternate;
`;

export const CircleXLarge = styled.div`
  animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
  animation-delay: 0.9s;
  position: absolute;
  top: -250px;
  left: -600px;
  background: #6482e2;
  width: 1200px;
  height: 1200px;
  border-radius: 50%;
  opacity: 0.1;
  animation: pulsate 3s ease-in-out infinite alternate;
`;

export const CircleXXLarge = styled.div`
  animation-timing-function: cubic-bezier(0.6, 0, 0.4, 1);
  animation-delay: 1.2s;
  position: absolute;
  top: -400px;
  left: -750px;
  background: #18203a;
  width: 1500px;
  height: 1500px;
  border-radius: 50%;
  opacity: 0.05;
  animation: pulsate 3s ease-in-out infinite alternate;
`;

export const LogoWrapper = styled.div`
  position: fixed;
  left: 400px;
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1500px) {
    left: 300px;
  }

  @media (max-width: 1400px) {
    left: 200px;
  }

  @media (max-width: 1200px) {
    left: 75px;
  }

  @media (max-width: 950px) {
    left: 25px;
  }

  @media (max-width: 900px) {
    display: none !important;
  }
`;

export const LogoTitle = styled(LabelWrapper)`
  font-size: 40px;
  color: white;
`;

export const CarouselImg = styled.img`
  max-width: 300px;
  max-height: 150px;
  border-radius: 5px;
`;

export const FooterLinkWrapper = styled.div`
  display: flex;
`;
