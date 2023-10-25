planet1 = {
  name: "Mercury",
  moon: 0,
};

planet2 = {
  name: "Venus",
  moon: 0,
};

planet3 = {
  name: "Earth",
  moon: 1,
};

planet4 = {
  name: "Mars",
  moon: 2,
};

planet5 = {
  name: "Jupiter",
  moon: 4,
};

const planets = [planet1, planet2, planet3, planet4, planet5];

const colors = [
  "lightblue",
  "orange",
  "green",
  "red",
  "lightgreen",
  "grey",
  "white",
  "blue",
];

const section = document.querySelector(".listPlanets");
let planetClass = 1;
let colorIndex = 0;

const moon = ["moon"];

for (let planet of planets) {
  let div = document.createElement("div");
  let marginLeft = 0;
  let marginTop = 0;
  for (let i = 1; step <= planet.moon; i++) {
    let moon = document.createElement("div");
    moon.classList.add("moon");
    moon.setAttribute(
      "style",
      `margin-left: ${marginLeft}px; margin-top: ${marginTop}px;`
    );
    marginLeft += 50;
    div.append(moon);
  }
  div.classList.add("planet", planetClass);
  div.setAttribute("style", `background-color: ${colors[colorIndex]};`);
  section.append(div);
  planetClass += 1;
  colorIndex += 1;
}
