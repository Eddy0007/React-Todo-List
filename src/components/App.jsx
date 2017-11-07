import React from 'react';
import TodoList from './TodoList/index.jsx';
import TodoForm from './TodoForm/index.jsx';
export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     name: '',
  //     completed: ''
  //   };

  //   // Bind 'this' to event handlers. React ES6 does not do this by default
  //   // this.nameChangeHandler = this.nameChangeHandler.bind(this);
  // }
  constructor() {
    super();
    this.state = {
      todos: [
        {
          name: 'todo 1',
          completed: false
        },
        {
          name: 'todo 2',
          completed: false
        },
        {
          name: 'todo 3',
          completed: false
        }
      ],
      isEditing: false
    };
  }
  nameChangeHandler(event) {
    console.log('event');
    this.setState({ name: event.target.value });
  }
  addTodo(name) {
    const todo = {
      name: name,
      completed: false
    };
    let todos = this.state.todos;
    todos.push(todo);
    console.log(todos);
    this.setState({
      todos: todos
    });
  }
  nameSubmitHandler(event) {
    event.preventDefault();
    this.setState({ submitted: ture, name: this.state.name });
  }
  render() {
    if (this.state.submitted) {
    }
    return (
      <div style={{ textAlign: 'center' }}>
        <TodoForm onAddItem={name => this.addTodo(name)} />
        <TodoList todos={this.state.todos} />
      </div>
    );
  }
}
