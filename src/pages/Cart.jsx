import React, { useEffect, useState } from "react";

export default function Cart({ cartItems }) {
  const [cartItemsData, setCartItemsData] = useState([]);

  // Getting the user details
  const userData = localStorage.getItem("userDetails");
  const userEmail = JSON.parse(userData);

  const cartData = sessionStorage.getItem("cartItems");
 
  useEffect(() => {
    async function fetchData() {
      try {
        const call = await fetch("http://localhost:5000/products/getcartdata", {
          method: "POST",
          body: JSON.stringify({ cartItems, email: userEmail.email }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const response = await call.json();
        console.log(response.cart);
        setCartItemsData(response.cart);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
    if (cartItems.length > 0 || userEmail.email) {
      fetchData();
    }
  }, [cartItems, userEmail.email]);

  let totalPrice = 0;

  const updatePrice = cartItemsData.map((item) => (totalPrice += item.price));

  return (
    <section className="cart-section">
      <h1>My Cart</h1>
      <div>
        {cartItemsData.map((item) => (
          <div className="cart-product" key={item._id}>
            <img src={item.image} className="cart-product-img" />
            <h1>{item.name}</h1>
            <h1>₹ {item.price}</h1>
          </div>
        ))}
      </div>
      <div className="total-price">
        <h1>Total: </h1>
        <h1>₹ {totalPrice}</h1>
      </div>
      <button className="selling-btn cart-btn">Payment</button>
    </section>
  );
}
