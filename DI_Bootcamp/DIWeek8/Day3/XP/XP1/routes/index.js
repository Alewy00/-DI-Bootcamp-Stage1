const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("This is the homepage");
});

router.get("/about", (req, res) => {
  res.send("About Us page");
});
module.exports = { router };
