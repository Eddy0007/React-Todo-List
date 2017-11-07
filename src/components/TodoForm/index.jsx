import React from 'react';
class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onAddItem(this.state.name);
          this.setState({ name: '' });
        }}
      >
        <input
          onChange={e => this.setState({ name: e.target.value })}
          placeholder="Type here your todo"
          value={this.state.name}
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
export default TodoForm;
