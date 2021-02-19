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
  max-width: 500px;
  padding: 60px 60px 0 60px;
  box-sizing: border-box;
  flex-grow: 0.2;
  min-width: 320px;
  width: 500px;
  z-index: 1;

  @media (max-width: 500px) {
    padding: 60px 15px 0 15px;
    width: 100%;
  }

  @media (max-width: 900px) {
    position: fixed;
    right: 0;
  }
`;

export const MarginBlock = styled.div`
  display: flex;
  flex-grow: 0.7;
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

export const LogoWrapper = styled.div`
  display: flex;
  height: 90vh;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 1;

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
