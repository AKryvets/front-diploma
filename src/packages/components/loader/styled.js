import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  position: ${({ isLocal }) => (isLocal ? 'absolute' : 'fixed')};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;
