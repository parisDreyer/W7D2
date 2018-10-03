import React from 'react';
import TodoInput from './todo_list/todo_form.jsx';


class TodoList extends React.Component {

  render() {
    // console.log(this.props);
    const todos = this.props.todos;
    const items = todos.map((todo, i) => (
        <ul key={`item_${todo.id}`}>
          <li>Todo: {todo.id}</li>
          <li>title: {todo.title}</li>
          <li>body: {todo.body}</li>
        </ul>
    ));
    return <div><TodoInput title={''} body={''} receiveTodo={this.props.receiveTodo}/> {items}</div>;
  }

}
export default TodoList;

// <li><TodoInput title={todo.title} body={todo.body}/></li>
