import React from "react";
import staticImg from "../images/static/tomato.png";

export default function Userpage() {
  return (
    <>
      <section className="user-area">
        <div>
          <h1>
            Welcome back, <span className="account-username">Surya Teja</span>
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
          <button>Log Out</button>
        </div>
      </section>
      <div className="past-orders">
        <h1>Orders</h1>
        <div className="past-order-info">
          <img src={staticImg} alt="static image" className="past-orders-img" />
          <div className="past-orders-text">
            <h3>Orderd on: 13/08/2023</h3>
            <h3>No of items: 10+</h3>
            <p>price: 2043/-</p>
          </div>
        </div>
        <div className="past-order-info">
          <img src={staticImg} alt="static image" className="past-orders-img" />
          <div className="past-orders-text">
            <h3>Orderd on: 13/08/2023</h3>
            <h3>No of items: 10+</h3>
            <p>price: 2043/-</p>
          </div>
        </div>
        <div className="past-order-info">
          <img src={staticImg} alt="static image" className="past-orders-img" />
          <div className="past-orders-text">
            <h3>Orderd on: 13/08/2023</h3>
            <h3>No of items: 10+</h3>
            <p>price: 2043/-</p>
          </div>
        </div>
      </div>
    </>
  );
}
