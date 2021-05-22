import styled from 'styled-components';
import { Link as LinkDOM } from 'react-router-dom';

import { DefaultColors } from './theme/colors';

export const Link = styled(LinkDOM)`
  color: ${DefaultColors.lightBlue};
  outline: none;
`;

export const LabelWrapper = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  line-height: 1.5;
  color: ${DefaultColors.lightPink};
`;

export const Text = styled(LabelWrapper)`
  font-size: ${({ size }) => size || '14px'};
  word-break: break-word;
  display: flex;
  align-items: center;
  color: ${({ color }) => color || DefaultColors.lightPink};
  font-weight: ${({ weight }) => weight || 400};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || '100%'};
  position: relative;
  padding: 10px;
  margin-bottom: 10px;
  background: ${DefaultColors.secondBlue};
  box-shadow: 0px 0px 20px 0px rgba(44, 101, 144, 0.1);
`;
