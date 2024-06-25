import css from "./Layout.module.css";
import AppBar from "../AppBar/AppBar";

export default function Layout() {
  return (
    <div className={css.wrap}>
      <AppBar />
    </div>
  );
}