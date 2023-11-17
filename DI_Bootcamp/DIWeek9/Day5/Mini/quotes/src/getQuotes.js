import quotes from "./qoutes";
import React, { useState, useEffect } from "react";

function GetQuote() {
  const [prevQuote, setPrevQuote] = useState(null);

  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const [colors, setColors] = useState({
    background: getRandomColor(),
    quoteText: getRandomColor(),
    buttonText: getRandomColor(),
  });

  const randomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const newQuote = quotes[randomIndex];
    return newQuote;
  };

  const getRandomQuote = () => {
    let newQuote = randomQuote();
    while (prevQuote === newQuote) {
      newQuote = randomQuote();
    }
    setPrevQuote(newQuote);
    setColors({
      background: getRandomColor(),
      quoteText: getRandomColor(),
      buttonText: getRandomColor(),
    });
  };

  const handleClick = () => {
    getRandomQuote();
  };

  useEffect(() => {
    if (!prevQuote) {
      getRandomQuote();
    }
  }, [prevQuote]);

  if (prevQuote) {
    return (
      <>
        <div style={{ backgroundColor: colors.background, padding: "20px" }}>
          <h1 style={{ color: colors.quoteText }}>{prevQuote.quote}</h1>
          <h2 style={{ color: colors.quoteText }}>{prevQuote.author}</h2>
          <button
            style={{ backgroundColor: colors.buttonText }}
            onClick={getRandomQuote}
          >
            Get New Quote
          </button>
        </div>
      </>
    );
  }
}

export default GetQuote;
