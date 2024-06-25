import css from "./NotFound.module.css";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <h2>Page not found</h2>
      <Link to="/">Go to the home page</Link>
    </div>
  );
}