import styled from 'styled-components';

import { DefaultColors } from '../../../../theme';
import { LabelWrapper } from '../../../../styled';

export const SidebarItemWrapper = styled.div`
  width: 100%;
  padding: 15px;
  border-radius: 5px;
  line-height: 18px;
  cursor: pointer;
  background: ${({ isActive }) =>
    isActive ? DefaultColors.fourthBlue : 'inherit'};
  color: ${({ isActive }) =>
    isActive ? DefaultColors.lightBlue : DefaultColors.lightPink};
  transition: 1s;
  display: flex;
  align-items: center;

  :hover {
    color: ${DefaultColors.lightBlue};
  }
`;
export const SidebarItemTitle = styled.div`
  line-height: 18px;
  margin-left: 5px;
`;

export const LogoTitle = styled(LabelWrapper)`
  font-size: 28px;
  margin-left: 10px;
`;

export const LogoIcon = styled.img`
  height: 45px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 75px;
  width: 100%;
  z-index: 1;
`;
