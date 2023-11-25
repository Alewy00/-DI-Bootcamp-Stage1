import React, { useState, useEffect } from "react";

function Example2() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/data2.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSkills(data.Skills);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      {skills.map((skill) => (
        <div>
          <h1>{skill.Area}</h1>

          <ul>
            {skill.SkillSet.map((skill) => (
              <li>{skill.Name}</li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}
export default Example2;
