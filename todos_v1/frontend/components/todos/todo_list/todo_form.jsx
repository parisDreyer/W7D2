import React from 'react';

class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title ||'',
      body: props.body ||''
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    this.createTodo = this.createTodo.bind(this);
    console.log(props);
    console.log(this);
  }

  updateTitle(event) {
    this.setState({title: event.currentTarget.value});
    // console.log(this.state.title);
  }
  updateBody(event) {
    this.setState({body: event.currentTarget.value});
    // console.log(this.state.body);
  }

  createTodo(e) {
    console.log('event', e);
    e.preventDefault();
    this.props.receiveTodo(this.state);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.createTodo}>

          <input onChange={this.updateTitle} value={this.state.title}/>
          <span>The Title is: {this.state.title}</span>
          <input onChange={this.updateBody} value={this.state.body}/>
          <span>The Body is: {this.state.body}</span>
          <input type="submit" value="Edit"/>
        </form>
      </div>
    );
  }
}
export default TodoInput;
