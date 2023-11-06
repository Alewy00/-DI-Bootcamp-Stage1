//  1
const person = {
  name: "John Doe",
  age: 25,
  location: {
    country: "Canada",
    city: "Vancouver",
    coordinates: [49.2827, -123.1207],
  },
};

// const {name, location: {country, city, coordinates: [lat, lng]}} = person;

// console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

// I am John DOe from vancover canada, long/lat

// 2

function displayStudentInfo(objUser) {
  const { first, last } = objUser;
  console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({ first: "Elie", last: "Schoppik" });

/// 3

const users = { user1: 18273, user2: 92833, user3: 90315 };

let userArr = Object.entries(users);

userArr.forEach((arr) => {
  arr[1] = arr[1] * 2;
});

console.log(userArr);

// 4

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person("John");
console.log(typeof member);

// 5

class Dog {
  constructor(name) {
    this.name = name;
  }
}
// Analyze the options below. Which constructor will successfully extend the Dog class?
// A
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.size = size;
//   }
// };

// B
// class Labrador extends Dog {
//   constructor(name, size) {
//     super(name);
//     this.size = size;
//   }
// }

//  C
// class Labrador extends Dog {
//   constructor(size) {
//     super(name);
//     this.size = size;
//   }
// };

//   // D
// class Labrador extends Dog {
//   constructor(name, size) {
//     this.name = name;
//     this.size = size;
//   }
// };

// B

// 6
// Evaluate these (ie True or False)

// [2] === [2]
// true
// {} === {}
// false
// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 };
const object2 = object1; //refer to memory
const object3 = object2; // refer memory
const object4 = { number: 5 }; // different obj

object1.number = 4;
console.log(object2.number); //4
console.log(object3.number); // 4
console.log(object4.number); //5

// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal {
  constructor(name, type, color) {
    super(name, type, color);
  }
  sound(sound) {
    console.log(
      `My name is ${this.name}, I am a ${this.type}, ${
        this.color
      } color, and I make ${sound.repeat(3)} sound`
    );
  }
}

const farmerCow = new Mamal("Lily", "cow", "brown and white");

farmerCow.sound("moooo");
