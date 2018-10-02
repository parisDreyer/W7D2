
export const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  return state.todos.map ((todo, idx) => {
    todo.id = keys[idx];
    return todo; //change to for loop and get an array of toDos
  });
};
