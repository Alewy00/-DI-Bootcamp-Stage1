import React from "react";
import { useTheme } from "../context/ThemeContext";
function Comp() {
  const { toggleTheme, theme } = useTheme();
  return (
    <>
      <h1
        style={{
          background: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#333" : "#fff",
        }}
      >
        HI!
      </h1>
      {/* <button onClick={toggleTheme()}>Switch</button> */}
    </>
  );
}

export default Comp;
