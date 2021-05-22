import styled from 'styled-components';

import { Container } from '../../../../styled';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  width: 550px;
  justify-content: space-between;
`;

export const ContentWrapper = styled(Container)`
  display: flex;
  position: relative;
  flex-direction: column;
  width: 100%;
`;

export const TestsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 20px;
  margin-bottom: 10px;
`;

export const FormFieldWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ResultModalWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ResultModalButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  justify-content: space-between;
`;
