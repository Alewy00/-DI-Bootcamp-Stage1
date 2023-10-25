let div = document.querySelector("div");

div.setAttribute("id", "socialNetworkNavigation");

const ul = document.querySelector("ul");
const newLi = document.createElement("li");
const newA = document.createElement("a");
const newTextNode = document.createTextNode("Logout");
newA.append(newTextNode);
newLi.append(newA);
ul.append(newLi);

newA.setAttribute("href", "#");

console.log(ul.firstElementChild.textContent);
console.log(ul.lastElementChild.textContent);
