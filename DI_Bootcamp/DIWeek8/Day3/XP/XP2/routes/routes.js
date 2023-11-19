const express = require("express");
const router = express.Router();
// app.use(express.json());
// Sample in-memory database for storing to-do items
const todos = [];

// Get all to-do items
router.get("/", (req, res) => {
  res.json(todos);
});
// Add a new to-do item
router.post("/", (req, res) => {
  if (!req.body.act || !req.body.done) {
    return res.status(400).json({ error: "Data is required" });
  }
  const todo = {
    id: todos.length + 1,
    activity: req.body.act,
    done: req.body.done,
  };
  todos.push(todo);
  res.status(201).json(todo);
});
// Update a to-do item by ID
router.put("/:id", (req, res) => {
  const id = req.params;
  const act = req.body.act;

  const todoToUpdate = todos.find((todo) => todo.id === id);

  if (!todoToUpdate) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todoToUpdate.act = act;

  res.json(todoToUpdate);
});

// Delete a to-do item by ID

router.delete("/:id", (req, res) => {
  const id = req.params;

  const todoIndex = todos.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const deletedTodo = todos.splice(todoIndex, 1);

  res.json(deletedTodo[0]);
});

module.exports = router;
