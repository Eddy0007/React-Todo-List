/*
    ./src/components/App.jsx
*/

import React from 'react';
import TodoList from './TodoList/index.jsx';
import TodoForm from './TodoForm/index.jsx';
export default class App extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       todos: [
  //         {
  //           name: 'todo 1',
  //           completed: false
  //         },
  //         {
  //           name: 'todo 2',
  //           completed: false
  //         },
  //         {
  //           name: 'todo 3',
  //           completed: false
  //         }
  //       ]
  //     };
  //   }
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <TodoForm />
        <TodoList />
      </div>
    );
  }
}
