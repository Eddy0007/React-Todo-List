import React from 'react';
class TodoForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.addItem}>
        <input placeholder="Type here your todo" />
      </form>
    );
  }
}
export default TodoForm;
