import React, { useEffect, useState } from "react";

export default function Cart({ cartItems }) {
  const [cartItemsData, setCartItemsData] = useState([]);

  // Getting the user details
  const userData = localStorage.getItem("userDetails");
  const userEmail = JSON.parse(userData);

  useEffect(() => {
    async function fetchData() {
      try {
        const call = await fetch("https://groceyish-backend.onrender.com/products/getcartdata", {
          method: "POST",
          body: JSON.stringify({ cartItems, email: userEmail.email }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        });
        const response = await call.json();
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

  async function payment() {
    const call = await fetch("https://groceyish-backend.onrender.com/payment/create-payment", {
      method: "POST",
      body: JSON.stringify({ totalPrice }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const response = await call.json();
    const options = {
      key: "rzp_test_3sJkeFgdZJH2Z9",
      amount: response.order.amount, // Amount in paise
      currency: "INR",
      order_id: response.order.id,
      name: "Groceyish",
      description: "Payment for your service",
      handler: function (response) {
        alert(`Payment ID: ${response.razorpay_payment_id}`);
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  }

  return (
    <section className="cart-section">
      <h1>My Cart</h1>
      <div>
        {cartItemsData.map((item) => (
          <div className="cart-product" key={item._id}>
            <img src={item.image} className="cart-product-img" />
            <h1>{item.name}</h1>
            <h1>₹ {item.price}</h1>
            <p className="remove-cart-btn" id={item._id}>
              remove
            </p>
          </div>
        ))}
      </div>
      <div className="total-price">
        <h1>Total: </h1>
        <h1>₹ {totalPrice}</h1>
      </div>
      <button onClick={payment} className="selling-btn cart-btn">
        Payment
      </button>
    </section>
  );
}
