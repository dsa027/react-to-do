import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: '',
      todos: [
        { description: 'Walk the cat', isCompleted: true },
        { description: 'Throw the dishes away', isCompleted: false },
        { description: 'Buy new dishes', isCompleted: false }
      ]
    }
    // this.toggleComplete = this.toggleComplete.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  toggleComplete(index) {
    let todos = this.state.todos;
    todos[index].isCompleted = !todos[index].isCompleted;
    this.setState({todos: todos});
  }
  handleChange(event) {
    this.setState({newTask: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.newTask) return;

    this.setState(
      {
        todos: [
          ...this.state.todos,
          {description: this.state.newTask, isCompleted: false}
        ],
        newTask: ''})
  }
  render() {
    return (
      <div className="App">
        <h3>ToDo</h3>
        <ul>
          {this.state.todos.map((todo, index) => {
            return (
              <ToDo
                key={index}
                description={todo.description}
                isCompleted={todo.isCompleted}
                toggleComplete={() => this.toggleComplete(index)}
              />
            )
          })}
        </ul>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text"
            value={this.state.newTask}
            onChange={(e) => this.handleChange(e)}
          />
          <input
            type="submit"
          />
        </form>
      </div>
    );
  }
}

export default App;
