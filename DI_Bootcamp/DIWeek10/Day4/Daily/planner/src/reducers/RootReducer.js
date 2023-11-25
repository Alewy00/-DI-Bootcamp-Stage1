import { ADD_TASK, EDIT_TASK, REMOVE_TASK } from "../actions/actions";

const initialState = {
  tasks: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: Date.now(),
            text: action.payload.text,
            date: action.payload.date,
          },
        ],
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, text: action.payload.text, date: action.payload.date }
            : task
        ),
      };
    case REMOVE_TASK:
      return {
        ...state,
        todos: state.tasks.filter((task) => task.id !== action.payload.id),
      };
    default:
      return state;
  }
}

export default rootReducer;
