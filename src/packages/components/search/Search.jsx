import React, { memo, useCallback, useState } from 'react';
import MagnifyIcon from 'mdi-react/MagnifyIcon';

import { InputField } from '../../form-fields/input';

import { SearchButton, SearchWrapper } from './styled';

export const Search = memo(({ onSearch }) => {
  const [searchText, setSearchText] = useState('');
  const [error, setError] = useState('');

  const onSearchClickHandler = useCallback(() => {
    if (!searchText) {
      setError('Please type the search text');
    }
    if (onSearch) onSearch(searchText);
  }, [onSearch, searchText]);

  const onSearchInputChange = useCallback(
    (value) => {
      setError(null);
      setSearchText(value);
    },
    [setSearchText, setError]
  );

  return (
    <SearchWrapper>
      <InputField
        error={error}
        appearance="active"
        placeholder="Loader"
        value={searchText}
        onChange={onSearchInputChange}
      />
      <SearchButton onClick={onSearchClickHandler}>
        <MagnifyIcon />
      </SearchButton>
    </SearchWrapper>
  );
});
