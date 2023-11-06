function sortWords(newArr) {
  newArr.sort();

  let check = new Promise((resolve, reject) => {
    if (newArr.length > 4) {
      resolve(newArr);
    } else {
      reject("Not enough");
    }
  });

  check
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
}

function makeAllCaps(arr) {
  let str = new Promise((resolve, reject) => {
    let check = (word) => (typeof word == "string" ? true : false);
    if (arr.every(check)) {
      resolve(arr.map((word) => word.toUpperCase()));
    } else {
      reject("At least one item not a string");
    }
  });

  str.then((result) => sortWords(result)).catch((error) => console.log(error));
}

// makeAllCaps([1, "pear", "banana"])

// makeAllCaps(["apple", "pear", "banana"])

// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])

const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`;

function toJs() {
  let checkStr = new Promise((resolve, reject) => {
    let morseJS = JSON.parse(morse);
    if (Object.keys(morseJS).length !== 0) {
      resolve(morseJS);
    } else {
      reject("Empty object");
    }
  });

  checkStr
    .then((result) => toMorse(result))
    .catch((error) => console.log(error));
}

function toMorse(morseJS) {
  let userWord = prompt("Give me a word or a sentence to encode");
  let checkStr = userWord.split(" ");

  let result = new Promise((resolve, reject) => {
    check = true;
    checkStr.forEach((word) => {
      for (let letter of word.toLowerCase()) {
        if (Object.keys(morseJS).includes(letter)) {
          check = true;
        } else {
          check = false;
        }
      }
    });

    if (check) {
      let results = [];

      checkStr.forEach((word) => {
        newWord = "";
        for (let letter of word.toLowerCase()) {
          letter = morseJS[letter];
          newWord += letter;
        }
        results.push(newWord);
      });
      resolve(results);
    } else {
      reject("At least one element from the string not in a Morse dictionary");
    }
  });

  result
    .then((result) => joinWords(result))
    .catch((error) => console.log(error));
}

function joinWords(morse) {
  let div = document.getElementById("morse");
  console.log(morse);
  morseTranslation.forEach((word) => {
    let p = document.createElement("p");
    p.append(document.createTextNode(word));
    div.append(p);
  });

  // console.log(morseTranslation.join("\n"))
}

toJs();
