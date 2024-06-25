import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeNameFilter, changePhoneFilter } from "../../redux/filters/slice";
import { selectNameFilter, selectPhoneFilter } from "../../redux/filters/selectors";

export default function SearchBox() {
  const nameFilter = useSelector(selectNameFilter);
  const phoneFilter = useSelector(selectPhoneFilter);
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
      <label htmlFor="search-phone">Find contacts by phone number</label>
      <input
        value={phoneFilter}
        className={css.input}
        id="search-phone"
        onChange={(e) => {
          const value = e.target.value.toLowerCase();
          dispatch(changePhoneFilter(value));
        }}
      />
    </div>
  );
}