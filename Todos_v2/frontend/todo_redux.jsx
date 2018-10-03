import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodo, receiveTodos} from './actions/todosActions';
import Root from './components/root';
import { allTodos } from './reducers/selectors';

document.addEventListener('DOMContentLoaded', () => {
  const todo = document.getElementById('todo');
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  store.todos = [{id:1, title:'stuff', body:'more stuff'}, {id:2, title:'extra stuff', body:'more xtra stuff'},
  {id:3, title:'super xtra stuff', body:'super more stuff'}];
  ReactDOM.render(<Root store={store} />, todo);//<todo store={store} />, todo);
});
