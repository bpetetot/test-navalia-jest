import React, { Component } from "react";
import "./app.css";

class App extends Component {
  state = { todos: [], current: undefined };

  updateCurrent = e => this.setState({ current: e.target.value });

  addTodo = e => {
    this.setState(state => ({ todos: [...state.todos, state.current] }));
    this.addInput.value="";
  };

  deleteTodo = index => () => {
    const toDelete = [...this.state.todos];
    toDelete.splice(index, 1);
    this.setState({ todos: toDelete });
  };

  render() {
    return (
      <div className="app">
        <h1>TODOs</h1>
        <div className="addTodo">
          <input
            ref={(e) => (this.addInput = e)}
            id="newTodoInput"
            type="text"
            placeholder="add todo"
            onChange={this.updateCurrent}
          />
          <button id="addBtn" onClick={this.addTodo}>
            <i className="fa fa-plus" />
          </button>
        </div>
        <div className="todolist">
          {this.state.todos.length === 0 &&
            <div id="nothing" className="todo">
              you have nothing to do
            </div>}
          {this.state.todos.map((todo, i) =>
            <div key={i} className="todo">
              <span id={`todo-${i}`}>
                {todo}
              </span>
              <a id={`deleteBtn-${i}`} onClick={this.deleteTodo(i)}>
                <i className="fa fa-trash" />
              </a>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
