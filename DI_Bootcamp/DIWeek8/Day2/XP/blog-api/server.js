const express = require("express");

let app = express();

const data = [
  { id: 1, content: "iPhone", title: "Expensive" },
  { id: 2, content: "iPad", title: "Big" },
  { id: 3, content: "iWatch", title: "Time" },
];

app.get("/api/posts", (req, res) => {
  res.json(data);
});

app.get("/api/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const post = data.find((post) => post.id === id);

  !post ? res.status(404).send("Not found") : res.json(post);
});

app.use(express.json()); // parse json body content

app.post("/api/posts", (req, res) => {
  const newData = {
    id: data.length + 1,
    title: req.body.title,
    content: req.body.content,
  };
  data.push(newData);
  res.status(201).json(newData);
});

app.use(express.json());
app.put("/api/posts/:id", (req, res) => {
  console.log(req);
  const id = Number(req.params.id);
  const index = data.findIndex((post) => post.id === id);
  if (index === -1) {
    return res.status(404).send("Product not found");
  }
  const updatedPost = {
    id: data[index].id,
    title: req.body.title,
    content: req.body.content,
  };

  data[index] = updatedPost;
  res.status(200).json("Product updated");
});

app.delete("/api/posts/:id", (req, res) => {
  const id = Number(req.params.id);
  const index = data.findIndex((post) => post.id === id);
  if (index === -1) {
    return res.status(404).send("Product not found");
  }
  data.splice(index, 1);
  res.status(200).json("Product deleted");
});

app.listen(3000, () => console.log("listening on port 3000."));
