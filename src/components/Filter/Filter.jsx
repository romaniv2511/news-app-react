import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';

import { InputAdornment, InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';
import styles from './Filter.module.scss';

export const Filter = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  searchParams.get('query');

  const handleChange = e => {
    const value = e.target.value.trim();
    dispatch(changeFilter(value));
    setSearchParams({ query: value });
  };

  return (
    <>
      <p className={styles.label}>Filter by keywords</p>
      <InputBase
        className={styles.input}
        name="filterByKeys"
        type="text"
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
      />
    </>
  );
};
