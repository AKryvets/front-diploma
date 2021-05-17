import React, { useCallback, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { DefaultColors } from '../../../../theme';

import { history } from '../../../../app/history';

import { SidebarCloseButton, SidebarContent, SidebarWrapper } from '../styled';

import { appActions } from '../../../../app/store';

import { appSelectors } from '../../../../app/selectors';

import logoIcon from '../../../../../public/images/logo.png';

import { HeaderWrapper, LogoIcon, LogoTitle } from './styled';

import { sidebarItems } from './consts';

import { SidebarItem } from './SidebarItem';

export const Sidebar = () => {
  const dispatch = useDispatch();
  const { activeSidebarItem, isSidebarOpen } = useSelector(
    appSelectors.getAppData
  );

  const onHideButtonHandler = useCallback(() => {
    dispatch(appActions.setIsSidebarOpen(!isSidebarOpen));
  }, [isSidebarOpen]);

  const onSideBarItemClick = useCallback(
    (newActiveItemName) => {
      const newActiveItem = sidebarItems.find(
        ({ name }) => newActiveItemName === name
      );

      dispatch(appActions.setActiveSidebarItem(newActiveItem));

      history.push({ pathname: newActiveItem.url });
    },
    [sidebarItems]
  );

  useEffect(() => {
    if (!activeSidebarItem) {
      const currentUrl = window.location.pathname;
      const activeItem = sidebarItems.find(({ url }) => url === currentUrl);

      dispatch(appActions.setActiveSidebarItem(activeItem));
    }
  }, [activeSidebarItem]);

  return (
    <SidebarWrapper isOpen={isSidebarOpen}>
      <SidebarContent>
        <HeaderWrapper>
          <LogoIcon src={logoIcon} />
          {isSidebarOpen && <LogoTitle>DevCoach</LogoTitle>}
        </HeaderWrapper>
        <SidebarCloseButton
          isOpen={isSidebarOpen}
          color={DefaultColors.secondBlue}
          onClick={onHideButtonHandler}
        />

        {sidebarItems.map((item) => (
          <SidebarItem
            isOpen={isSidebarOpen}
            key={item.name}
            {...item}
            isActive={activeSidebarItem?.name === item.name}
            onClick={onSideBarItemClick}
          />
        ))}
      </SidebarContent>
    </SidebarWrapper>
  );
};
