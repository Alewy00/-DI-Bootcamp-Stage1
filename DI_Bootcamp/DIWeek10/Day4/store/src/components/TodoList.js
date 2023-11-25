import { connect } from "react-redux";
import { toggleTodo, removeTodo } from "../actions/actions";

function TodoList({ todos, toggleTodo, removeTodo }) {
  return (
    <ul>
      {todos.map((todo) => (
        <li>
          <h1>{todo.text}</h1>
          <button onClick={() => removeTodo(todo.id)}>Remove</button>
          <button onClick={() => toggleTodo(todo.id)}>Toggle</button>
        </li>
      ))}
    </ul>
  );
}
const mapStateToProps = (state) => ({ todos: state.todos });

const mapDispatchToProps = {
  toggleTodo,
  removeTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
