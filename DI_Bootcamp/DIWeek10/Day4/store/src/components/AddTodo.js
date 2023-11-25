import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions/actions";

function AddTodo({ addTodo }) {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      addTodo(newTodo);
      setNewTodo("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new todo"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
}

const mapDispatchToProps = { addTodo };

export default connect(null, mapDispatchToProps)(AddTodo);
