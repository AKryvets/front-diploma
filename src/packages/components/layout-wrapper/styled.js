import styled from 'styled-components';
import ChevronLeftCircleIcon from 'mdi-react/ChevronLeftCircleIcon';

import { DefaultColors } from '../../../theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background: ${DefaultColors.darkBlue};
`;

export const SidebarWrapper = styled.div`
  display: flex;
  height: 100%;
  transition: 0.5s;
  width: ${({ isOpen }) => (isOpen ? '250px' : '85px')};
  background: ${DefaultColors.secondBlue};
  border-right: 1px solid ${DefaultColors.thirdBlue};
  z-index: 1;
`;

export const SidebarContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 15px;
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

export const ContentWrapper = styled.div`
  padding: 25px 10px;
  width: calc(100% - 250px);
  margin: 0 auto;
  height: 100%;
  overflow: auto;
  z-index: 1;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background-color: ${DefaultColors.secondBlue};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${DefaultColors.fifthBlue};
    border-radius: 3em;
    box-shadow: inset 1px 1px 10px #f3faf7;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${DefaultColors.fifthBlue};
  }
`;

export const GridWrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 0;
`;
