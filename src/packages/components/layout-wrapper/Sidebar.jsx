import React, { useCallback, useState } from 'react';

import { DefaultColors } from '../../../theme';

import { SidebarCloseButton, SidebarContent, SidebarWrapper } from './styled';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const onClickHandler = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <SidebarWrapper isOpen={isOpen}>
      <SidebarContent>
        <SidebarCloseButton
          isOpen={isOpen}
          color={DefaultColors.secondBlue}
          onClick={onClickHandler}
        >
          close
        </SidebarCloseButton>
        Sidebar
      </SidebarContent>
    </SidebarWrapper>
  );
};
