import clsx from "clsx";
import css from "./Home.module.css";
import phonebook from "../../assets/phonebook.png"


export default function Home() {
  return (
    <div className={clsx("container", css.pageWrap)}>
      <img src={phonebook} alt="PhoneBook" width={300} />
      <div className={css.title} >
        <h1>Welcome to your personal PhoneBook!</h1>
        <h3>In our application, you can manage your contacts!</h3>
      </div>
    </div>
  );
}