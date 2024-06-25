import css from "./Login.module.css";
import clsx from "clsx";

import LoginForm from "../../components/LoginForm/LoginForm";

export default function Login() {
  return (
    <div className={clsx("container", css.pageWrap)}>
      <LoginForm />
    </div>
  );
}