
export const allTodos = (state) => {
  let keys = Object.keys(state.todos);
  // console.log('keys', keys);
  let arr = [];

  for (let i = 0; i < keys.length; i++) {
    arr.push(state.todos[keys[i]]);
  }

  return arr;
};
