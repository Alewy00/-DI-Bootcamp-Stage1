// 1
function funcOne() {
  let a = 5;
  if (a > 1) {
    a = 3;
  }
  alert(`inside the funcOne function ${a}`);
}

// A is 3. since if stament is hit is outside the block - Wrong lol

// funcOne();

// what will happen if the variable is declared with const instead of let ?

//  error

//#2
// let a = 0;

function funcTwo() {
  a = 5;
}

function funcThree() {
  alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
// funcTwo()
// funcThree()
// What will happen if the variable is declared
// with const instead of let ?
//error

// funcThree() // 0
// funcTwo() // error
// funcThree() // 0

//3

function funcFour() {
  window.a = "hello";
}

function funcFive() {
  alert(`inside the funcFive function ${a}`);
}

// run in the console:
// funcFour()
// funcFive()

//4

// let a = 1;
function funcSix() {
  const a = "test";
  alert(`inside the funcSix function ${a}`);
}

funcSix();

// #4.2 What will happen if the variable is declared
// with const instead of let - nothing wrong

// 5
let a = 2;
if (true) {
  let a = 5;
  alert(`in the if block ${a}`);
}

alert(`outside of the block ${a}`);

// alert1 is 5 - local
// alert2 is 2 - global

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.

const winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 1;
// console.log(experiencePoints)

// 3

const isString = (value) => {
  if (typeof value === "string") {
    return true;
  } else {
    return false;
  }
};

// console.log(isString('hiiii'));
// console.log(isString([1]));

// 4

const sum = (x, y) => x + y;

// 5
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// function gram(kg){
//     return kg*1000
// }

// console.log(gram(2))

// const gram = function (kg) {console.log(kg*1000)}(2)

// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

//  Function Declerations are compiled immeadatly, Expressions load line by line
const gram = (kg) => kg * 1000;

// console.log(gram(2))

// 6

const sentence = (function (numberOfChildren, partnerName, location, job) {
  let body = document.querySelector("body");
  let p = `You will be a ${job} in ${location}, and married to ${partnerName} with ${numberOfChildren} kids.`;
  body.append(p);
})(3, "Joe", "Tel-Aviv", "Coder");

// 7
// Instructions
// John has just signed in to your website and you want to welcome him.
// Create a Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.

const welcome = (function (name) {
  let nav = document.querySelector("nav");
  let div = document.createElement("div");
  let img = document.createElement("img");
  let p = document.createElement("p");

  p.append(document.createTextNode(`Welcome, ${name}!`));
  div.append(img);
  div.append(p);
  nav.append(div);
})("John");

// 🌟 Exercise 8 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.

// let body = document.querySelector('body')

// let makeJuice = function (size){
//     function addIngredients(one, two, three){
//         let p = `The client wants a ${size} juice, containing ${one}, ${two} and ${three}`
//         body.append(p)
//     }
//     addIngredients('banana', 'apple', 'grapes')
// } ('small')

// Part II:
// In the makeJuice function, create an empty array named ingredients.
// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

let body = document.querySelector("body");

let makeJuice = function (size) {
  const ingredients = [];

  function addIngredients(one, two, three) {
    ingredients.push(one);
    ingredients.push(two);
    ingredients.push(three);
  }

  function displayJuice() {
    if (ingredients.length > 3) {
      let p = `The client wants a ${size} juice, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}, ${ingredients[3]}, ${ingredients[4]}, ${ingredients[5]}.`;
      body.append(p);
    } else {
      let p = `The client wants a ${size} juice, containing ${ingredients[0]}, ${ingredients[1]} and ${ingredients[2]}.`;
      body.append(p);
    }
  }
  addIngredients("banana", "apple", "grapes");
  addIngredients("carrot", "pineapple", "fig");
  displayJuice();
};
// console.log(makeJuice('small'))
