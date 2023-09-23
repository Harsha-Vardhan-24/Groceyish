import "./styles.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import customStyles from "./customStyles";
import { ThemeProvider } from "@mui/material/styles";
import Layout from "./components/Layout";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/Login";
import ProductPage from "./pages/Productpage";
import Products from "./pages/Products";
import Userpage from "./pages/Userpage";
import Cart from "./pages/Cart";

export default function App() {
  const userData = localStorage.getItem("userDetails");

  const [loginState, setLoginState] = useState(userData ? true : false);

  function updateLoginState(update) {
    setLoginState(update);
  }

  const [cart, setCart] = useState([]);

  function addItems(item_id) {
    setCart((prevState) => [...prevState, item_id]);
    sessionStorage.setItem("cartItems", cart);
  }

  function clearCart() {
    setCart([])
  }

  return (
    <main>
      <ThemeProvider theme={customStyles}>
        <BrowserRouter>
          <Routes>
            <Route
              element={
                <Layout loginState={loginState} cartItems={cart.length} />
              }
            >
              <Route
                path="/"
                element={
                  <Homepage loginState={loginState} addItems={addItems} />
                }
              />
              <Route path="product" element={<ProductPage />} />
              <Route path="products" element={<Products />} />
              <Route path="cart" element={<Cart cartItems={cart} />} />
            </Route>
            <Route
              path="login"
              element={<LoginPage updateLoginState={updateLoginState} />}
            />
            <Route
              path="user"
              element={<Userpage updateLoginState={updateLoginState} updateCart={clearCart} />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </main>
  );
}
