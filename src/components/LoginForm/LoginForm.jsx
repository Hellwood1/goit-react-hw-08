import css from "./LoginForm.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";

let schema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter a valid email address!")
    .required("Required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters!")
    .required("Required"),
});


export default function LoginForm() {
  const dispatch = useDispatch();

  return (
    <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={schema}
      onSubmit={(values, actions) => {
        dispatch(login(values));
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <h2 className={css.title}>Log in</h2>
        <ul>
          <li>
            <label htmlFor="email">Email</label>
            <Field id="email" type="email" name="email" className={css.input} />
            <ErrorMessage name="email" component="div" className={css.error} />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <Field
              id="password"
              type="password"
              name="password"
              className={css.input}
            />
            <ErrorMessage name="password" component="div" className={css.error} />
          </li>
        </ul>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
}