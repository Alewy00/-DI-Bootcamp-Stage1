import React, { useReducer, useState, useRef } from "react";

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");
  const [filterType, setFilterType] = useState("all"); // "all", "completed", "active"
  const editInputRef = useRef(null);

  function todoReducer(state, action) {
    switch (action.type) {
      case "ADD_TODO":
        return [
          ...state,
          { id: Date.now(), text: action.text, completed: false },
        ];
      case "REMOVE_TODO":
        return state.filter((todo) => todo.id !== action.id);
      case "EDIT_TODO":
        return state.map((todo) =>
          todo.id === action.id ? { ...todo, text: action.text } : todo
        );
      case "TOGGLE_TODO":
        return state.map((todo) =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        );
      case "FILTER_TASKS":
        return action.filterType === "all"
          ? state
          : state.filter((todo) =>
              action.filterType === "completed"
                ? todo.completed
                : !todo.completed
            );
      default:
        return state;
    }
  }

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleEditInputChange = (id, text) => {
    dispatch({ type: "EDIT_TODO", id, text });
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: "TOGGLE_TODO", id });
  };

  const handleFilterTasks = (type) => {
    setFilterType(type);
    dispatch({ type: "FILTER_TASKS", filterType: type });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Add a new todo"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <p>{todo.text}</p>
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
            <input
              type="text"
              placeholder="EDIT TEXT"
              value={todo.text}
              onChange={(e) => handleEditInputChange(todo.id, e.target.value)}
              ref={editInputRef}
            />
            <button onClick={() => handleToggleTodo(todo.id)}>
              {todo.completed ? "Mark Active" : "Mark Completed"}
            </button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => handleFilterTasks("all")}>Show All</button>
        <button onClick={() => handleFilterTasks("completed")}>
          Show Completed
        </button>
        <button onClick={() => handleFilterTasks("active")}>Show Active</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;
