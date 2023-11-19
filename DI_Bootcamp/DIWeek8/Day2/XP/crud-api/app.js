let axios = require("axios");
const express = require("express");
const { fetchPosts } = require("./data/dataService.js");
let app = express();
console.log(fetchPosts);

const main = async () => {
  const data = await fetchPosts();
  console.log(data);
  app.listen(3000, () => console.log("listening on port 3000."));
};

main();
