import styled from 'styled-components';

import { Container } from '../../styled';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
`;

export const ContentWrapper = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
`;

export const Image = styled.img`
  width: ${({ width }) => width || '100%'};
  margin: 10px;
`;
