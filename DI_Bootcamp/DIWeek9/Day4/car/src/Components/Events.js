import { Component } from "react";
import React, { useState } from "react";
function Events() {
  const [isToggleOn, Toggle] = useState(true);
  const switchToggle = () => {
    isToggleOn === true ? Toggle(false) : Toggle(true);
  };
  const ClickMe = () => {
    alert("I was clicked");
  };

  const KeyDown = (event) => {
    if (event.key === "Enter") {
      alert(`Enter key pressed with input value: ${event.target.value}`);
    }
  };
  return (
    <>
      <button onClick={ClickMe}>Click Me</button>
      <input onKeyDown={KeyDown}></input>
      <button onClick={switchToggle}>
        {isToggleOn === true ? "ON" : "OFF"}
      </button>
    </>
  );
}

export default Events;
