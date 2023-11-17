import { Component } from "react";
import React, { useState } from "react";
import Garage from "./Garage";
function Car({ carInfo }) {
  const [color, setColor] = useState("black");
  return (
    <>
      <h1>
        this car is a {color} {carInfo.model}
        <Garage size="small" />
      </h1>
      ;
    </>
  );
}

export default Car;
