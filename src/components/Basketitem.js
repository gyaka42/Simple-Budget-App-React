import React from "react";
import "../styles/basketItems.css";

function Basketitem({ item, product }) {
  return (
    <>
      <li className="basket-item">
        {product.title} <span>x {item.amount}</span>
      </li>
    </>
  );
}

export default Basketitem;
