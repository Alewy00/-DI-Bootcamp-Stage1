export const ADD_TASK = "ADD_TASK";
export const EDIT_TASK = "EDIT_TASK";
export const REMOVE_TASK = "REMOVE_TASK";

export function addTask(text, date) {
  return { type: ADD_TASK, payload: { text, date } };
}

export function editTask(text, id, date) {
  return { type: EDIT_TASK, payload: { text, id, date } };
}

export function deleteTask(text, id) {
  return { type: REMOVE_TASK, payload: { id } };
}
