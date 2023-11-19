const express = require("express");
const router = express.Router();
const fs = require("fs/promises");
const path = require("path");

const tasksFilePath = path.join(__dirname, "../tasks.json");

router.get("/", async (req, res) => {
  try {
    const data = await fs.readFile(tasksFilePath, "utf-8");
    const tasks = JSON.parse(data);
    res.json(tasks);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:id", async (req, res) => {
  const taskId = req.params.id;

  try {
    const data = await fs.readFile(tasksFilePath, "utf-8");
    const tasks = JSON.parse(data);
    const task = tasks.find((t) => t.id === taskId);

    if (task) {
      res.json(task);
    } else {
      res.status(404).send("Task not found");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.post("/", async (req, res) => {
  const newTask = req.body;

  if (!newTask.title) {
    return res.status(400).send("Title is required");
  }

  try {
    const data = await fs.readFile(tasksFilePath, "utf-8");
    const tasks = JSON.parse(data);

    newTask.id = Date.now().toString();

    tasks.push(newTask);

    await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.put("/:id", async (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;

  if (!updatedTask.title) {
    return res.status(400).send("Title is required");
  }

  try {
    const data = await fs.readFile(tasksFilePath, "utf-8");
    const tasks = JSON.parse(data);
    const index = tasks.findIndex((t) => t.id === taskId);

    if (index !== -1) {
      tasks[index] = { ...tasks[index], ...updatedTask };

      await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
      res.json(tasks[index]);
    } else {
      res.status(404).send("Task not found");
    }
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

router.delete("/:id", async (req, res) => {
  const taskId = req.params.id;

  try {
    const data = await fs.readFile(tasksFilePath, "utf-8");
    let tasks = JSON.parse(data);
    tasks = tasks.filter((t) => t.id !== taskId);

    await fs.writeFile(tasksFilePath, JSON.stringify(tasks, null, 2));
    res.send("Task deleted successfully");
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
