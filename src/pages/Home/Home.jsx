import clsx from "clsx";
import css from "./Home.module.css";


export default function Home() {
  return (
    <div className={clsx("container", css.pageWrap)}>
      <h1>Welcome to your personal PhoneBook!</h1>
      <h3>In our application, you can manage your contacts!</h3>
    </div>
  );
}