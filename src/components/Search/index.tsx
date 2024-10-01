import React, { useRef, useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import debounce from 'lodash.debounce';

import { setSearchValue } from '../../redux/slices/filterSlice';
import { ReactComponent as SearchIcon } from '../../assets/search_icon.svg';
import { ReactComponent as ClearSearchIcon } from '../../assets/clear_search_icon.svg';

import styles from './Search.module.scss';
import { DispatchProperties } from '../../redux/store';

const Search: React.FC = () => {
  const [value, setValue] = useState('');

  const dispatch = useDispatch<DispatchProperties>();
  const inputRef = useRef<HTMLInputElement>(null);
  const handleClearSearch = () => {
    dispatch(setSearchValue(''));

    setValue('');
    inputRef.current?.focus();
  };

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 500),
    [],
  );
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        className={styles.input}
        placeholder='Пошук ...'
        value={value}
        onChange={onChangeInput}
      />
      <SearchIcon />
      {value && (
        <ClearSearchIcon
          onClick={handleClearSearch}
          style={{ right: '12px', left: 'inherit', cursor: 'pointer' }}
        />
      )}
    </div>
  );
};

export default Search;
