import styled from 'styled-components';
import ChevronLeftCircleIcon from 'mdi-react/ChevronLeftCircleIcon';

import { DefaultColors } from '../../../theme';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${DefaultColors.darkBlue};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  height: 75px;
  width: 100%;
  position: fixed;
  z-index: 1;
  background: ${DefaultColors.secondBlue};
`;

export const SidebarWrapper = styled.div`
  display: flex;
  top: 75px;
  height: calc(100% - 75px);
  transition: 0.5s;
  width: ${({ isOpen }) => (isOpen ? '200px' : '50px')};
  position: fixed;
  left: 0;
  background: ${DefaultColors.secondBlue};
  border-right: 1px solid ${DefaultColors.thirdBlue};
`;

export const SidebarContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const SidebarCloseButton = styled(ChevronLeftCircleIcon)`
  position: absolute;
  right: -12px;
  top: 100px;
  background: #50b5ff;
  border-radius: 25px;
  transition: 0.5s;
  transform: ${({ isOpen }) => !isOpen && 'rotate(180deg)'};
`;
