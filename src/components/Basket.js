import React from "react";
import Basketitem from "./Basketitem";
import "../styles/basket.css";

function Basket({ basket, total, resetBasket, products }) {
  return (
    <>
      <div className="basket-container container">
        <h3>Alis Veris Detaylari</h3>
        <ul>
          {basket.map((item) => (
            <Basketitem
              key={item.id}
              item={item}
              product={products.find((p) => p.id === item.id)}
            />
          ))}
        </ul>
        <div className="total">Toplam: ${total}</div>
        <button className="basket-reset-btn" onClick={resetBasket}>
          Sepeti Sifirlar
        </button>
      </div>
    </>
  );
}

export default Basket;
