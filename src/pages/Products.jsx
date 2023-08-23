import React, { useState } from "react";
import staticImg from "../images/static/tomato.png";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export default function Products() {
  const [selectedValue, updateSelectedValue] = useState(1);

  function updateValue(event) {
    if (selectedValue >= 1) {
      event === "increase"
        ? updateSelectedValue(selectedValue + 1)
        : selectedValue > 1 && updateSelectedValue(selectedValue - 1);
    }
  }

  return (
    <section className="products-area">
      <div className="products-area-product">
        <img src={staticImg} className="product-area-img" alt="product image" />
        <h1>Product Title</h1>
        <div className="add-more">
          <button
            className="product-btn"
            onClick={() => updateValue("decrease")}
          >
            -
          </button>
          <h1>{selectedValue}</h1>
          <button
            className="product-btn"
            onClick={() => updateValue("increase")}
          >
            +
          </button>
        </div>
        <button className="product-btn products-area-btn">
          <ShoppingBagIcon />
          Add to cart
        </button>
      </div>
      <div className="products-area-product">
        <img src={staticImg} className="product-area-img" alt="product image" />
        <h1>Product Title</h1>
        <div className="add-more">
          <button
            className="product-btn"
            onClick={() => updateValue("decrease")}
          >
            -
          </button>
          <h1>{selectedValue}</h1>
          <button
            className="product-btn"
            onClick={() => updateValue("increase")}
          >
            +
          </button>
        </div>
        <button className="product-btn products-area-btn">
          <ShoppingBagIcon />
          Add to cart
        </button>
      </div>
      <div className="products-area-product">
        <img src={staticImg} className="product-area-img" alt="product image" />
        <h1>Product Title</h1>
        <div className="add-more">
          <button
            className="product-btn"
            onClick={() => updateValue("decrease")}
          >
            -
          </button>
          <h1>{selectedValue}</h1>
          <button
            className="product-btn"
            onClick={() => updateValue("increase")}
          >
            +
          </button>
        </div>
        <button className="product-btn products-area-btn">
          <ShoppingBagIcon />
          Add to cart
        </button>
      </div>
      <div className="products-area-product">
        <img src={staticImg} className="product-area-img" alt="product image" />
        <h1>Product Title</h1>
        <div className="add-more">
          <button
            className="product-btn"
            onClick={() => updateValue("decrease")}
          >
            -
          </button>
          <h1>{selectedValue}</h1>
          <button
            className="product-btn"
            onClick={() => updateValue("increase")}
          >
            +
          </button>
        </div>
        <button className="product-btn products-area-btn">
          <ShoppingBagIcon />
          Add to cart
        </button>
      </div>
      <div className="products-area-product">
        <img src={staticImg} className="product-area-img" alt="product image" />
        <h1>Product Title</h1>
        <div className="add-more">
          <button
            className="product-btn"
            onClick={() => updateValue("decrease")}
          >
            -
          </button>
          <h1>{selectedValue}</h1>
          <button
            className="product-btn"
            onClick={() => updateValue("increase")}
          >
            +
          </button>
        </div>
        <button className="product-btn products-area-btn">
          <ShoppingBagIcon />
          Add to cart
        </button>
      </div>
    </section>
  );
}
