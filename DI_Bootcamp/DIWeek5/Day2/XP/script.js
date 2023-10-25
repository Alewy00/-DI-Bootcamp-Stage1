const h1 = document.querySelector("h1");
console.log(h1);

const article = document.querySelector("article");
article.lastElementChild.remove();

let h2 = document.querySelector("h2");

h2.addEventListener("click", function () {
  h2.style.backgroundColor = "red";
});

let h3 = document.querySelector("h3");

h3.addEventListener("click", function () {
  h3.style.display = "none";
});

btn.addEventListener("click", function () {
  makeBigger();
});

function makeBigger() {
  let p = btn.previousElementSibling;
  p.style.fontSize = "larger";
}

let form = document.querySelector("form");
console.log(form.innerHTML);

let input1 = document.getElementById("fname");
let input2 = document.getElementById("lname");

// console.log(input1, input2)

// console.log(input1.name, input2.name)

// let button = document.getElementById('submit')
let ul = document.querySelector(".usersAnswer");

button.addEventListener("click", function (e) {
  e.preventDefault();
  createLi();
});

function createLi() {
  console.log(input1.value);
  console.log(input2.value);
  if (input1.value.length > 0 && input2.value.length > 0) {
    let li = document.createElement("li");
    let text = document.createTextNode(`${input1.value} ${input2.value}`);
    li.append(text);
    ul.append(li);
    input1.value = "";
    input2.value = "";
  }
}

let strong = document.querySelectorAll("strong");

function getBoldItems() {
  for (let word of strong) {
    boldWord = word.innerHTML;
    allBoldItems.push(boldWord);
  }
}

function highlight() {
  for (let word of strong) {
    word.style.color = "blue";
  }
}

function returnItemsToDefault() {
  for (let word of strong) {
    word.style.color = "";
  }
}

let string = document.getElementById("string");

string.addEventListener("mouseover", function () {
  highlight();
});
string.addEventListener("mouseout", function () {
  returnItemsToDefault();
});

function volumeSphere() {
  let radius = document.getElementById("radius").value;
  radius = Math.abs(radius);
  let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  volume = volume.toFixed(4);
  document.getElementById("volume").value = volume;
  return false;
}

let button = document.getElementById("submit");
button.addEventListener("click", function (e) {
  e.preventDefault();
  volumeSphere();
});
