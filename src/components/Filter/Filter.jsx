import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <p>Filter by keywords</p>
      <input
        name="filterByKeys"
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value.trim()))}
      />
    </>
  );
};
