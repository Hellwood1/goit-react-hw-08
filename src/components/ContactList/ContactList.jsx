import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import { selectFilteredContacts } from "../../redux/contacts/selector";

export default function ContactList() {
  const contacts = useSelector(selectFilteredContacts);
  const contactCount = contacts.length;

  return (
    <div>
      <div className={css.contactCount}>
        {contactCount > 0 ? `In your phone book: ${contactCount} contacts.` : "In your phone book: 0 contacts."}
      </div>
      <ul className={css.list}>
        {contacts.map((contact) => (
          <li key={contact.id} className={css.item}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}