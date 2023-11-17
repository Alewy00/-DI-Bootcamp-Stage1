import React, { useState, useEffect } from "react";

function FavColor() {
  const [favoriteColor, setFavoriteColor] = useState("red");

  useEffect(() => {
    alert("useEffect reached");
    setFavoriteColor("yellow");
  }, []);

  const changeColorToBlue = () => {
    setFavoriteColor("blue");
  };

  return (
    <div>
      <h1>{favoriteColor}</h1>
      <button onClick={changeColorToBlue}>Change Color to Blue</button>
    </div>
  );
}

export default FavColor;
