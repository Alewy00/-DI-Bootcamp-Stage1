//1

function displayNumbersDivisible(divisor) {
  let sum_all = 0;
  for (let i = 0; i < 501; i++) {
    if (i % divisor == 0) {
      console.log(i);
      sum_all += i;
    }
  }
  console.log(sum_all);
}

displayNumbersDivisible(47);

//2
const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1,
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10,
};

// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
  let total = 0;
  for (let item of shoppingList) {
    if (item in prices && stock[item] > 0) {
      total += prices[item];
      stock[item] -= 1;
    } else if (stock[item] <= 0) {
      console.log(`${item} not in stock right now`);
    } else {
      console.log(`${item} not in the price list`);
    }
  }
  console.log(total);
}

// myBill()

//3

function changeEnough(itemPrice, amountOfChange) {
  const quarters = amountOfChange[0] * 0.25;
  const dimes = amountOfChange[1] * 0.1;
  const nickel = amountOfChange[2] * 0.05;
  const penny = amountOfChange[3] * 0.01;

  if (quarters + dimes + nickel + penny >= itemPrice) {
    console.log(true);
  } else {
    console.log(false);
  }
}

// changeEnough(0.75, [0,0,20,5])
// changeEnough(4.25, [25, 20, 5, 0])
// changeEnough(14.11, [2,100,0,0])
// changeEnough(0.75, [0,0,20,5])

// 4

function hotelCost() {
  let totalPrice = 0;
  let answer = false;
  while (answer == false) {
    let userAnswer = Number(
      prompt("How many nights you would like to stay in the hotel?")
    );
    if (Number.isInteger(userAnswer) == true && userAnswer != 0) {
      answer = true;
      totalPrice = userAnswer * 140;
    }
  }
  return totalPrice;
}

// hotelCost()

function planeRideCost() {
  let totalPrice = 0;
  let answer = false;
  while (answer == false) {
    let userAnswer = prompt("Where you are going?");
    if (
      typeof userAnswer === "string" &&
      userAnswer != "" &&
      Number.isInteger(Number(userAnswer)) == false
    ) {
      if (userAnswer === "London") {
        answer = true;
        totalPrice += 183;
        return totalPrice;
        // console.log(`Your plane ride cost is ${totalPrice}$`)
      } else if (userAnswer === "Paris") {
        answer = true;
        totalPrice += 220;
        return totalPrice;
        // console.log(`Your plane ride cost is ${totalPrice}$`)
      } else {
        answer = true;
        totalPrice += 300;
        return totalPrice;
        // console.log(`Your plane ride cost is ${totalPrice}$`)
      }
    }
  }
}

// planeRideCost()

function rentalCarCost() {
  let totalPrice = 0;
  let answer = false;
  while (answer == false) {
    let userAnswer = Number(prompt("For how long you need a car (days)?"));
    if (Number.isInteger(userAnswer) == true && userAnswer != 0) {
      answer = true;
      if (userAnswer < 10) {
        totalPrice = userAnswer * 40;
      } else {
        totalPrice = userAnswer * 40 - userAnswer * 40 * 0.05;
      }
    }
  }
  return totalPrice;
}

// rentalCarCost()

function totalVacationCost() {
  totalCost = hotelCost() + planeRideCost() + rentalCarCost();
  console.log(`Your vacation total cost: ${totalCost}$`);
}

// totalVacationCost()

//7
let book1 = {
  title: "Harry Potter",
  author: "JK Rowling",
  image:
    "https://tse4.mm.bing.net/th?id=OIP.MpyZqbzROoTvIaGSsimAfgHaFj&pid=Api&P=0&h=220",
  alreadyRead: true,
};

let book2 = {
  title: "Enders Game",
  author: "Scott Card",
  image:
    "https://tse1.mm.bing.net/th?id=OIP.uAEreQDGjqNJX_T4oyTSEwHaKe&pid=Api&P=0&h=220",
  alreadyRead: false,
};

allBooks = [book1, book2];

let sec = document.querySelector(".listBooks");

for (let book of allBooks) {
  let info = document.createElement("div");
  let descCont = document.createElement("p");
  let desc = document.createTextNode(`${book.title} written by ${book.author}`);
  let img = document.createElement("img");
  img.setAttribute("src", book.image);
  img.setAttribute("width", "100px");
  img.setAttribute("height", "150px");
  descCont.append(desc);
  info.append(img);
  info.append(descCont);

  if (book.alreadyRead == true) {
    info.setAttribute("style", "color: red");
  }

  sec.append(info);
}
