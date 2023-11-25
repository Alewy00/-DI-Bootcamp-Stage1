import React, { useState } from "react";
import { connect } from "react-redux";
import { addTask } from "../actions/action";

function AddTask({ addTask }) {
  const [newTask, setNewTask] = useState("");

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      addTask(newTask);
      setNewTodo("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTodo}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Todo</button>
    </div>
  );
}

const mapDispatchToProps = { addTask };

export default connect(null, mapDispatchToProps)(AddTask);
