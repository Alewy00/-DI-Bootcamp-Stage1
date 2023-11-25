export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
// these go to the reducer
export function addTodo(text) {
  return { type: ADD_TODO, payload: { text } };
}
export function toggleTodo(id) {
  return { type: TOGGLE_TODO, payload: { id } };
}

export function removeTodo(id) {
  return { type: REMOVE_TODO, payload: { id } };
}
// these are functions that are called by components
