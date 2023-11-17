import { Component } from "react";
import React, { useState } from "react";
function Phone({ size }) {
  const [phoneInfo, setPhoneInfo] = useState({
    brand: "Samsung",
    model: "Galaxy S20",
    color: "black",
    year: 2020,
  });
  const changeColor = () => {
    setPhoneInfo({
      ...phoneInfo,
      color: "blue",
    });
  };
  return (
    <>
      <h2>Phone Information</h2>
      <p>
        Brand: {phoneInfo.brand} <br />
        Model: {phoneInfo.model} <br />
        Color: {phoneInfo.color} <br />
        Year: {phoneInfo.year}
      </p>
      <button onClick={changeColor}></button>
    </>
  );
}

export default Phone;
