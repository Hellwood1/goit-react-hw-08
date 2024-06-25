import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter, selectPhoneFilter } from "../filters/selectors";

export const selectContacts = (state) => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter, selectPhoneFilter],
  (contacts, nameFilter, phoneFilter) => {
    if (nameFilter) {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(nameFilter)
      );
    }
    if (phoneFilter) {
      return contacts.filter(contact =>
        contact.number.includes(phoneFilter)
      );
    }
    return contacts;
  }
);