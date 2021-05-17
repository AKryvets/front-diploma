import React, { memo, useCallback } from 'react';

import { SidebarItemTitle, SidebarItemWrapper } from './styled';

export const SidebarItem = memo(
  ({ isOpen, name, title, isActive, onClick, icon }) => {
    const onClickItem = useCallback(
      (e) => {
        e.preventDefault();

        onClick(name);
      },
      [onClick, name]
    );

    return (
      <SidebarItemWrapper isActive={isActive} onClick={onClickItem}>
        {icon}
        {isOpen && <SidebarItemTitle>{title}</SidebarItemTitle>}
      </SidebarItemWrapper>
    );
  }
);
