import css from "./Contacts.module.css";
import clsx from "clsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/contacts/operations";

export default function Contacts() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={clsx("container", css.pageWrap)}>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}