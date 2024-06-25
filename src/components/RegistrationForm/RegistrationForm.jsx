import css from "./RegistrationForm.module.css";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";

export default function RegistrationForm() {

let errorSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Required"),
});

  const dispatch = useDispatch();

  return (
    <Formik
          initialValues={{ name: "", email: "", password: "" }}
            validationSchema={errorSchema}
      onSubmit={(values, actions) => {
        dispatch(register(values));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <h2 className={css.title}>Registration</h2>
        <ul>
          <li>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" className={css.input} />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <Field id="email" type="email" name="email" className={css.input} />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              type="password"
              name="password"
              className={css.input}
            />
          </li>
        </ul>
        <button type="submit">Register</button>
      </Form>
    </Formik>
  );
}