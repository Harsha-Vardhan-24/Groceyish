import React from "react";
import { useNavigate } from "react-router-dom";
import staticImg from "../images/static/tomato.png";
import { Field, Form, Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

export default function Userpage({ updateLoginState, updateCart }) {
  const userData = localStorage.getItem("userDetails");
  const userDetails = JSON.parse(userData);

  const navigate = useNavigate();

  const logout = () => {
    updateLoginState(false);
    localStorage.clear();
    updateCart();
    navigate("/");
  };

  return (
    <>
      <section className="user-area">
        <div>
          <h1>
            Welcome back,{" "}
            <span className="account-username">{userDetails.username}</span>
          </h1>
        </div>
        <div>
          <h1>Change username</h1>
          <button>Change</button>
        </div>
        <div>
          <h1>Change Password</h1>
          <button>Change</button>
        </div>
        <div>
          <h1>We miss you..!</h1>
          <button onClick={logout}>Log Out</button>
        </div>
      </section>
      {userDetails.admin ? (
        <section className="add-products">
          <h1>Add new products</h1>
          <div>
            <Formik
              initialValues={{
                Name: "",
                Type: "fruits",
                Image_url: "",
                Price: "",
                Featured: "false",
                BestSelling: "false",
              }}
              onSubmit={async (values, { resetForm }) => {
                const call = await fetch("http://localhost:5000/products/add", {
                  method: "POST",
                  mode: "cors",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(values),
                });
                const response = await call.json();
                if (response.message === "Product saved successfully") {
                  resetForm();
                  toast("Product saved", {
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
                  toast("Product not saved", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: failed,
                    theme: "light",
                  });
                }
              }}
            >
              {
                <Form className="new-items">
                  <Field type="text" name="Name" placeholder="Name" required />
                  <Field
                    className="type-selector"
                    as="select"
                    name="Type"
                    required
                  >
                    <option value="fruits">Fruits</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="meat">Meat</option>
                    <option value="poultry">Poultry</option>
                  </Field>
                  <Field
                    type="text"
                    name="Image_url"
                    placeholder="Image"
                    required
                  />
                  <Field
                    type="number"
                    name="Price"
                    placeholder="Pricing"
                    required
                  />
                  <h1>Featured Product</h1>
                  <Field
                    className="type-selector"
                    as="select"
                    name="Featured"
                    required
                  >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </Field>
                  <h1>Best Selling Product</h1>
                  <Field
                    className="type-selector"
                    as="select"
                    name="BestSelling"
                    required
                  >
                    <option value="false">No</option>
                    <option value="true">Yes</option>
                  </Field>
                  <button type="submit">Submit</button>
                </Form>
              }
            </Formik>
          </div>
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
            theme="colored"
          />
        </section>
      ) : (
        <div className="past-orders">
          <h1>Orders</h1>
          <div className="past-order-info">
            <img
              src={staticImg}
              alt="static image"
              className="past-orders-img"
            />
            <div className="past-orders-text">
              <h3>Orderd on: 13/08/2023</h3>
              <h3>No of items: 10+</h3>
              <p>price: 2043/-</p>
            </div>
          </div>
          <div className="past-order-info">
            <img
              src={staticImg}
              alt="static image"
              className="past-orders-img"
            />
            <div className="past-orders-text">
              <h3>Orderd on: 13/08/2023</h3>
              <h3>No of items: 10+</h3>
              <p>price: 2043/-</p>
            </div>
          </div>
          <div className="past-order-info">
            <img
              src={staticImg}
              alt="static image"
              className="past-orders-img"
            />
            <div className="past-orders-text">
              <h3>Orderd on: 13/08/2023</h3>
              <h3>No of items: 10+</h3>
              <p>price: 2043/-</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
