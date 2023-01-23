import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';

import { InputAdornment, InputBase } from '@mui/material';
import { Search } from '@mui/icons-material';
import styles from './Filter.module.scss';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <p className={styles.label}>Filter by keywords</p>
      <InputBase
        className={styles.input}
        name="filterByKeys"
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value.trim()))}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
      />
    </>
  );
};
