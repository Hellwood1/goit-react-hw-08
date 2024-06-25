import { useState } from 'react';
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact, updateContact } from "../../redux/contacts/operations";
import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import toast from "react-hot-toast";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [updatedName, setUpdatedName] = useState(name);
  const [updatedNumber, setUpdatedNumber] = useState(number);

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this contact?");
    if (confirmDelete) {
      dispatch(deleteContact(id))
        .then(() => {
          toast.success('Contact successfully deleted');
        })
        .catch((error) => {
          toast.error('Error deleting contact');
        });
    }
  };

  const handleUpdate = () => {
    dispatch(updateContact({ id, updates: { name: updatedName, number: updatedNumber } }))
      .then(() => {
        toast.success('Contact successfully updated');
        setIsEditing(false);
      })
      .catch((error) => {
        toast.error('Error updating contact');
      });
  };

  return (
    <div className={css.card}>
      <div className={css.contactDetails}>
        {isEditing ? (
          <>
            <div className={css.contactName} >
              <BsFillPersonFill size={20} />
              <input
                className={css.input}
                value={updatedName}
                onChange={(e) => setUpdatedName(e.target.value)}
              />
            </div>
            <div className={css.contactPhone}>
              <BsFillTelephoneFill size={20} />
              <input
                className={css.input}
                value={updatedNumber}
                onChange={(e) => setUpdatedNumber(e.target.value)}
              />
            </div>
          </>
        ) : (
          <>
            <div className={css.contactName}>
              <BsFillPersonFill size={20} />
              <p className={css.member}>{name}</p>
            </div>
            <div className={css.contactPhone} >
              <BsFillTelephoneFill size={20} />
              <p className={css.number}>{number}</p>
            </div>
          </>
        )}
      </div>
      <div className={css.contactButtons}>
        {isEditing ? (
          <>
            <button className={css.edit} onClick={handleUpdate}>
              Save
            </button>
            <button className={css.delete} onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className={css.edit} onClick={() => setIsEditing(true)}>
              Edit
            </button>
            <button className={css.delete} onClick={handleDelete}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}