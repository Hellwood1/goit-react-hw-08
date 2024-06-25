import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { selectIsLoggedIn } from "../../redux/auth/selectors";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.wrap}>
      <NavLink
        to="/"
        className={({ isActive }) => clsx(isActive ? css.isActive : css.link)}
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          to="/contacts"
          className={({ isActive }) => clsx(isActive ? css.isActive : css.link)}
        >
          Contacts
        </NavLink>
      )}
    </div>
  );
}