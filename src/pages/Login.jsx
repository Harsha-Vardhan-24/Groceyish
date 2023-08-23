import React from "react";
import { Formik, Field, Form } from "formik";
import logo from "../images/logo.png";

export default function LoginPage() {
  return (
    <section className="login-area">
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form className="login-form">
          <div className="logo-section login-logo">
            <img className="logo" src={logo} alt="Groceyish Logo" />
            <div>
              <h1>Groceyish</h1>
              <h2>Grocery</h2>
            </div>
          </div>
          <h1>Sign In / Sign Up Here</h1>
          <Field name="email" type="email" placeholder="Email here" />
          <Field name="password" type="password" placeholder="Password here" />
          <div className="login-btns">
            <button type="submit">Sign Up</button>
            <button type="submit">Sign In</button>
          </div>
        </Form>
      </Formik>
    </section>
  );
}
