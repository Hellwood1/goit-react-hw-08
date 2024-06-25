import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import toast from "react-hot-toast";

let schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Very short!')
    .max(25, 'The name must be no longer than 25 letters!')
    .required('Required!'),
  number: Yup.string()
    .matches(/^[0-9+\-\(\)]{3,}$/, 'Invalid phone number')
    .required('Phone number is required'),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  return (
    <>
      <h2>Add new contacts</h2>

      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          dispatch(addContact(values))
            .then(() => {
              toast.success('Contact successfully added!');
              actions.resetForm();
            })
            .catch(() => {
              toast.error('Error adding contact!');
            });
        }}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <ul>
              <li>
                <label htmlFor="name">Name</label>
                <Field className={css.input} id="name" name="name" />
                {errors.name && touched.name ? (
                  <p className={css.error}>{errors.name}</p>
                ) : null}
              </li>
              <li>
                <label htmlFor="number">Number</label>
                <Field className={css.input} id="number" name="number" />
                {errors.number && touched.number ? (
                  <p className={css.error}>{errors.number}</p>
                ) : null}
              </li>
            </ul>
            <button type="submit" className={css.btn}>Add contact</button>
          </Form>
        )}
      </Formik>
    </>
  );
}