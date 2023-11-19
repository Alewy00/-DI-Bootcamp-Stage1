const express = require("express");
require("dotenv").config();
const router = require("./server/routes");

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log(`running on port 3000`);
});

app.use("/api/posts", router);
