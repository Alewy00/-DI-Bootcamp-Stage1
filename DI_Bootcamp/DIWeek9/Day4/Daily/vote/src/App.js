import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  const increaseVotes = (index) => {
    const updatedLanguages = [...languages];

    updatedLanguages[index] = {
      ...updatedLanguages[index],
      votes: updatedLanguages[index].votes + 1,
    };

    setLanguages(updatedLanguages);
  };

  return (
    <div>
      {languages.map((language, index) => (
        <div key={index}>
          <button onClick={() => increaseVotes(index)}>
            {language.name} - Votes: {language.votes}
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
