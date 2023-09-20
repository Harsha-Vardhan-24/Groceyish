import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form } from "formik";
import logo from "../images/logo.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function LoginPage({ updateLoginState }) {
  const [userLogin, userSignUp] = useState(false);

  const navigate = useNavigate();

  return (
    <section className="login-area">
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={async (values) => {
          try {
            const apiCall = await fetch("http://localhost:5000/authenticate", {
              method: "POST",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(values),
            });
            const response = await apiCall.json();
            console.log(response.username, response.message);
            {
              if (response.message === "User not found") {
                userSignUp(true);
                toast(
                  "If you are first time around in here signup with your username",
                  {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  }
                );
              } else if (response.message === "Wrong Password") {
                toast.info("Wrong password, Please check and try again", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
              } else {
                toast.success("Logged In", {
                  position: "top-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                localStorage.setItem("userDetails", JSON.stringify(response));
                updateLoginState(true);
                navigate("/");
              }
            }
          } catch (error) {
            console.error(error);
          }
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
          {userLogin && (
            <Field
              name="username"
              type="username"
              placeholder="Username here"
            />
          )}
          <Field name="password" type="password" placeholder="Password here" />
          <div className="login-btns">
            <button type="submit">Login In</button>
          </div>
        </Form>
      </Formik>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
}
