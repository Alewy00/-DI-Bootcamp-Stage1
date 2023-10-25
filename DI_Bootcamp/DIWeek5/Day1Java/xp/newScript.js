console.log(document.getElementById("container"));

let docLi = document.querySelectorAll(".list li");
docLi[1].textContent = "Richard";

docLi = document.querySelectorAll(".list");

lastLi = docLi[1].querySelectorAll("li");
lastLi[1].remove();

for (let item of docLi) {
  item.firstChild.textContent = "Aaron";
}

for (let item of docLi) {
  item.classList.add("student_list");
}

docLi[0].classList.add("university", "attendance");

let div = document.querySelector("#container");

div.setAttribute("style", "background-color: lightblue; padding: 20px;");

let liDan = docLi[1].querySelectorAll("li");

liDan[1].setAttribute("style", "display: none;");

let liRichard = docLi[0].querySelectorAll("li");
liRichard[1].setAttribute("style", "border: 1px solid black;");

document.body.setAttribute("style", "font-size: 50px;");

if (div.style.backgroundColor === "lightblue") {
  alert("Hello X and Y");
} else {
  alert("error");
}
