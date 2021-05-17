import styled from 'styled-components';

import { LabelWrapper } from '../../../../styled';

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HeaderIcon = styled.img`
  width: 100%;
`;

export const HeaderTitle = styled(LabelWrapper)`
  display: flex;
  flex-direction: column;
  font-size: 30px;
  width: 100%;
  margin-top: 10px;
  text-align: center;
`;

export const FormFieldWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
