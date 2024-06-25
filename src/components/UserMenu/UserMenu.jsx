import css from "./UserMenu.module.css";
import { useDispatch, useSelector } from "react-redux";

import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";


export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrap}>
      <p className={css.text}>Hello, {user.name}</p>
      <button onClick={() => dispatch(logout())} className={css.logoutBtn}>
        Log out
      </button>
    </div>
  );
}