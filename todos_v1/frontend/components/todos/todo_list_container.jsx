import {connect} from 'react-redux';
import TodoList from './todo_list';

import { receiveTodos, receiveTodo } from './../../actions/todosActions';
import { allTodos } from '../../reducers/selectors';

const mapStateToProps = (state) => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(receiveTodo(todo))
});

const ToDoListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default ToDoListContainer;
