// const express = require("express");
// let app = express();

const emojis = [
  { emoji: "😀", name: "Smile" },
  { emoji: "🐶", name: "Dog" },
  { emoji: "🌮", name: "Taco" },
];

const getEmoji = () => {
  return emojis[Math.floor(Math.random() * emojis.length)];
};
const quiz = () => {
  const emoji = getEmoji();
  const emojiCont = document.getElementById("emojiList");
  emojiCont.textContent = "Pick the right emoji!" + `${emoji.name}`;

  emojis.forEach((emoji) => {
    const radioBtn = document.createElement("input");
    radioBtn.type = "radio";
    radioBtn.name = "emojiOptions";
    radioBtn.value = emoji.name;

    const label = document.createElement("label");
    label.appendChild(radioBtn);
    label.appendChild(document.createTextNode(emoji.emoji));

    emojiCont.appendChild(label);
  });
};

window.onload = quiz();
