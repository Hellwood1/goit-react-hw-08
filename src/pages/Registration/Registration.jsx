import css from "./Registration.module.css";
import clsx from "clsx";

import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";


export default function Registration() {
  return (
    <div className={clsx("container", css.pageWrap)}>
      <RegistrationForm />
    </div>
  );
}