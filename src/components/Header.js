import React, { useState } from "react";
import { moneyFormat } from "../helper JS/helpers";
import "../styles/header.css";

function Header({ total, money }) {
  return (
    <>
      {total > 0 && money - total !== 0 && (
        <div className="header">
          Harcayacak <span>${moneyFormat(money - total)}</span> paraniz kaldi
        </div>
      )}
      {total === 0 && (
        <div className="header">
          Harcamak icin <span>${moneyFormat(money)}</span> paraniz var!
        </div>
      )}
      {money - total === 0 && (
        <div className="header">Paran bitti, parasiz insan bos insandir!</div>
      )}
    </>
  );
}

export default Header;
