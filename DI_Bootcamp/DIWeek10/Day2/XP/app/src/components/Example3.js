import React, { useState, useEffect } from "react";

function Example3() {
  const [exp, setExp] = useState([]);

  useEffect(() => {
    fetch("/data2.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setExp(data.Experiences);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {exp.map((ele) => (
        <div key={ele.companyName}>
          <h1>{ele.companyName}</h1>
          <img src={ele.logo}></img>
          {ele.roles.map((role) => (
            <ul>
              <li>{role.title}</li>
              <li>{role.description}</li>
              <li>{role.location}</li>
            </ul>
          ))}
        </div>
      ))}
    </>
  );
}
export default Example3;
