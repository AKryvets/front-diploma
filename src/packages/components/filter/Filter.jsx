import React, { memo, useCallback, useState } from 'react';

import FilterMenuIcon from 'mdi-react/FilterMenuIcon';

import { Popover } from '@xcritical/popover';

import { FilterButton } from './styled';

export const Filter = memo(({ children }) => {
  const [isOpen, setIsOpen] = useState('');

  const onFilterButtonClick = useCallback(() => {
    setIsOpen(!isOpen);
  }, [setIsOpen, isOpen]);

  return (
    <Popover
      appearance
      position="bottom right"
      content={children}
      visible={!!isOpen}
    >
      <FilterButton onClick={onFilterButtonClick}>
        <FilterMenuIcon />
      </FilterButton>
    </Popover>
  );
});
