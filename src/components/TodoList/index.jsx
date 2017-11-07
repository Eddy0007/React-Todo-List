import React from 'react';
class TodoList extends React.Component {
  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <div>
          <button>Save</button>
          <button>Cancel</button>
        </div>
      );
    }
    {
      return (
        <div>
          <button onClick={isEditClick.bind(this)}>Edit</button>
          <button>Delete</button>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(function(todo, index) {
            return (
              <li key={index}>
                {todo.name}
                {/* {this.renderActionsSection()} */}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  onEditClick() {
    this.setState({ isEditing: true });
  }
}
export default TodoList;
