import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeNameFilter, changeNumberFilter } from "../../redux/filters/slice";
import { selectNameFilter, selectNumberFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const nameFilter = useSelector(selectNameFilter);
  const numberFilter = useSelector(selectNumberFilter);
  const dispatch = useDispatch();

  return (
    <div className={css.search}>
      <label htmlFor="search-name">Find contacts by name</label>
      <input
        value={nameFilter}
        className={css.input}
        id="search-name"
        onChange={(e) => {
          const value = e.target.value.toLowerCase();
          dispatch(changeNameFilter(value));
        }}
      />
      <label htmlFor="search-number">Find contacts by phone number</label>
      <input
        value={numberFilter}
        className={css.input}
        id="search-number"
        onChange={(e) => {
          const value = e.target.value.toLowerCase();
          dispatch(changeNumberFilter(value));
        }}
      />
    </div>
  );
}