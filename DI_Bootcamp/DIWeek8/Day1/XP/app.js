// import { users } from "./data.js";

function AvAge() {
  let sum = 0;
  users.forEach((user) => {
    sum += user.age;
  });

  let avgAge = sum / users.length;
  console.log(avgAge);
}

// AvAge();

// 3

const { readFunc, writeFunc } = require("./fileManager.js");

readFunc();
writeFunc();
