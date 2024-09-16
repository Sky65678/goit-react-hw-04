import { IoSearchOutline } from "react-icons/io5";
import { Field, Form, Formik } from "formik";

import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  return (
    <Formik initialValues={{ image: "" }} onSubmit={onSubmit}>
      <Form className={css.header}>
        <button className={css.inputButton} type="submit">
          <IoSearchOutline size="22px" />
        </button>
        <Field
          className={css.input}
          type="text"
          name="image"
          placeholder="Search images and photos"
        />
      </Form>
    </Formik>
  );
}
