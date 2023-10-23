//1

const people = ["Greg", "Mary", "Devon", "James"];

people.shift();

people.splice(-1, 1, "Jason");

people.push("Aaron");

console.log(people.indexOf("Mary"));

arr = people.slice(1, -1);
console.log(arr);

console.log(people.indexOf("Foo"));

last = people[people.length - 1];

console.log(last);

// Part II - Loops

for (let name of people) {
  console.log(name);
}

for (let name of people) {
  console.log(name);
  if (name === "Devon") {
    break;
  }
}

//2

let colors = ["green", "blue", "red", "orange", "white"];

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .

for (let color of colors) {
  console.log(`My #${colors.indexOf(color) + 1} choice is ${color}`);
}

let suffixes = ["st", "nd", "rd", "th"];

for (let color of colors) {
  if (colors.indexOf(color) < 3) {
    console.log(
      `My ${colors.indexOf(color) + 1}${
        suffixes[colors.indexOf(color)]
      } choice is ${color}`
    );
  } else {
    console.log(
      `My ${colors.indexOf(color) + 1}${
        suffixes[suffixes.length - 1]
      } choice is ${color}`
    );
  }
}

//3

// let number = prompt("Please enter your number")
// number = parseInt(number)
// console.log(typeof number)

let number = prompt("Please enter your number");
do {
  number = prompt("Please enter another number");
  number = parseInt(number);
} while (number < 10);

// Ex 4

const building = {
  numberOfFloors: 4,
  numberOfAptByFloor: {
    firstFloor: 3,
    secondFloor: 4,
    thirdFloor: 9,
    fourthFloor: 2,
  },
  nameOfTenants: ["Sarah", "Dan", "David"],
  numberOfRoomsAndRent: {
    sarah: [3, 990],
    dan: [4, 1000],
    david: [1, 500],
  },
};

console.log(building.numberOfFloors);

console.log(
  building.numberOfAptByFloor["firstFloor"],
  building.numberOfAptByFloor["thirdFloor"]
);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

console.log(
  building.nameOfTenants[1],
  building.numberOfRoomsAndRent[building.nameOfTenants[1].toLowerCase()][0]
);

if (
  building.numberOfRoomsAndRent["sarah"][1] +
    building.numberOfRoomsAndRent["david"][1] >
  building.numberOfRoomsAndRent["dan"][1]
) {
  building.numberOfRoomsAndRent["dan"][1] += 1200;
}

console.log(building.numberOfRoomsAndRent["dan"][1]);

//5

let family = {
  lastname: "Potter",
  mother_name: "Lily",
};

for (let key in family) {
  console.log(key);
}

for (let key in family) {
  console.log(family[key]);
}

// Ex 6

const details = {
  my: "name",
  is: "Rudolf",
  the: "raindeer",
};

for (let key in details) {
  console.log(`${key} ${details[key]}`);
}

// Ex 7

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

let secretName = "";

for (let letter of names) {
  secretName += letter[0];
}

secretName = secretName.split("");
secretName = secretName.sort();
secretName = secretName.join("");
console.log(secretName);
