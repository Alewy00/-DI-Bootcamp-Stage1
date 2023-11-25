import React from "react";

function Shop() {
  console.log("Shop component rendered");
  console.error("Error intentionally thrown in Shop component");
  throw new Error("Shop Error");
}

export default Shop;
