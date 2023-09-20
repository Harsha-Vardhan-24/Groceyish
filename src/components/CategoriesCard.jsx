import React from "react";
import staticImg from "../images/static/tomato.png";

export default function Card({ name, image }) {
  function getBgColor() {
    const colors = [
      "#FEEFEA",
      "#FFF3FF",
      "#F2FCE4",
      "#FEEFEA",
      "#ECFFEC",
      "#FFFCEB",
      "#DEF9EC",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  }
  return (
    <div
      style={{ backgroundColor: getBgColor() }}
      className="categories-item card-item"
    >
      <img
        className="category-img"
        alt="categoey card"
        src={image !== null ? image : staticImg}
      />
      <h1>{name}</h1>
    </div>
  );
}
