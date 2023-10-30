// 1

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.map((v, i) => console.log(`${i + 1}# choice is ${v}`));
const answer2 = colors.some((value) => value === "Violet");
if (answer2 === True) {
  console.log("Yeah");
} else {
  console.log("Nah");
}

// 2
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["st", "nd", "rd", "th"];

colors.map((v, i) => {
  return i > 2
    ? console.log(`${i + 1}${ordinal[1]} choice is ${v}`)
    : console.log(`${index + 1}${ordinal[i + 1]} choice is ${v}`);
});

// 3
// Analyze these pieces of code before executing them. What will be the outputs ?
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);
// output = [bread. carrot, potato,chickrn, apple, orange]

// const country = "USA";
// console.log([...country]);
// output = [U, S, A]

//4

// Using this array:

// const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//              { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//              { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//              { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//              { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//              { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//              { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];
// Using the map() method, push into a new array the firstname of the user and a welcome message. You should get an array that looks like this :
// const welcomeStudents = ["Hello Bradley", "Hello Chloe", "Hello Jonathan", "Hello Michael", "Hello Robert", "Hello Wes", "Hello Zach"]
// 2. Using the filter() method, create a new array, containing only the Full Stack Residents.

// const newArray = users.map((ele) => `Hello ${ele.firstName}`)
// const newArray2 = users.filter((ele) => ele.role === 'Full Stack Resident')

// 5
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const wholeString = epic.reduce((acc, val) => acc + " " + val);
console.log(wholeString);

//6
const students = [
  { name: "Ray", course: "Computer Science", isPassed: true },
  { name: "Liam", course: "Computer Science", isPassed: false },
  { name: "Jenner", course: "Information Technology", isPassed: true },
  { name: "Marco", course: "Robotics", isPassed: true },
  { name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
  { name: "Jamie", course: "Big Data", isPassed: false },
];
// Using the filter() method, create a new array, containing the students that passed the course.

const passStudent = students.filter((ele) => ele.isPassed === true);
console.log(passStudent);
passStudent.forEach((elem) =>
  console.log(`Good job ${ele.name}, you passed the course in ${elem.course}`)
);
