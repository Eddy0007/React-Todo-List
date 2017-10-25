import React from 'react';
class TodoList extends React.Component {
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
      ]
    };
  }
  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map(function(x) {
            return <li>x.name</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default TodoList;
