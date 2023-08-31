import { useDispatch, useSelector } from 'react-redux';
import { FilterLabel, FilterInput } from './Styles';
import { updateFilter } from 'redux/contacts/contactsSlice';

export const Filter = () => {
  const { filter } = useSelector(state => state.contacts);
  const dispatch = useDispatch();
  const handleChange = ({ target }) => {
    dispatch(updateFilter(target.value));
  };

  return (
    <>
      <FilterLabel>
        Find contacts by name:
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </FilterLabel>
    </>
  );
};
export default Filter;
