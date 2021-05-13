import styled from 'styled-components';

import { DefaultColors } from '../../theme';

export const PageWrapper = styled.div`
  display: flex;
  width: 100vw;
  box-sizing: border-box;
`;

export const Content = styled.div`
  width: 100%;
  background: ${DefaultColors.secondBlue};
  min-height: 100px;
  box-sizing: border-box;
  padding: 20px;
  border-radius: 3px;
  z-index: 1;
`;

export const ContentWrapper = styled.div`
  width: 500px;
  box-sizing: border-box;
  margin: auto;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  z-index: 1;
`;

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${DefaultColors.lightPink};
  margin: 20px auto;
`;

export const LabelWrapper = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 20px;
  color: ${DefaultColors.lightPink};
`;

export const FormFieldWrapper = styled.div`
  margin-bottom: 20px;
`;

export const FileInput = styled.input`
  width: 100px;
  height: 100px;
`;
