import css from "./NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className={css.notFound}>
      <h2 className={css.title}>Page not found</h2>
      <Link classname={css.link} to="/">Go to the home page</Link>
    </div>
  );
}