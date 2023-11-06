// 1

let compareToTen = (num) => {
  let compare = new Promise((resolve, reject) => {
    if (num < 10) {
      resolve(true);
    } else {
      reject(false);
    }
  });

  compare
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

// compareToTen(7)

// 2
Promise.resolve("success").then((data) =>
  setTimeout(() => console.log(data), 4000)
);

// 3

Promise.resolve(3).then((value) => console.log(value));
Promise.reject("Boo!").catch((error) => console.log(error));
