import { todo } from "./todo.js";

const list = new todo();

list.addTask("Shopping");
list.addTask("Code");
list.addTask("Clean");

list.AllTasks();

list.markTask("Clean the room");
