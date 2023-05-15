import React from "react";
import { useFormik } from "formik";

const UseFormik = () => {
  const initialValues = {
    name: "Ram",
    email: "",
    password: "",
  };
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: initialValues,

    onSubmit: (values) => {
      console.log("Name", values.name);
      console.log("Email", values.email);
      console.log("Password", values.password);
      localStorage.setItem("name", values.name);
    },
  });
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        name="name"
        id="name"
        value={values.name}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        id="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        id="password"
        value={values.password}
        onChange={handleChange}
      />

      <p>{localStorage.getItem("name")}</p>
      {localStorage.getItem("name") ? (
        <button type="button" onClick={() => localStorage.clear()}>
          Logout
        </button>
      ) : (
        <button type="submit">Login</button>
      )}
    </form>
  );
};

export default UseFormik;
