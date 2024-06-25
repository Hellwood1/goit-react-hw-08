import css from "./AuthNav.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

export default function AuthNav() {
  return (
    <div className={css.wrap}>
      <NavLink
        to="/register"
        className={({ isActive }) => clsx(isActive ? css.isActive : css.link)}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => clsx(isActive ? css.isActive : css.link)}
      >
        Login
      </NavLink>
    </div>
  );
}