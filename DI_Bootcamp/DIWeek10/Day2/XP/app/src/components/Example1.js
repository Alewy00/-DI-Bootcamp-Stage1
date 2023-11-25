import React, { useState, useEffect } from "react";

function Example1() {
  const [social, setSocial] = useState([]);

  useEffect(() => {
    fetch("/data2.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSocial(data.SocialMedias);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <ul>
      {social.map((media) => (
        <li>{media}</li>
      ))}
    </ul>
  );
}
export default Example1;
