import {RECEIVE_TODOS, RECEIVE_TODO} from '../actions/todosActions';

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  },
};

const todosReducer = (state = initialState, action) => {
  // const newState = state;
  switch (action.type) {
    case RECEIVE_TODOS:
      let newState = {};
      action.todos.forEach((todo) => {newState[todo.id] = todo;});
      return newState;
    case RECEIVE_TODO:
      newState = Object.assign({}, state); // might not be defined
      newState[action.todo.id] = action.todo;
      return newState;
    default:
      return state;
  }
};

export default todosReducer;
