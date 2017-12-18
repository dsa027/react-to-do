import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <ul>
        <li>
          <input type="checkbox" checked={ this.props.isCompleted } />
          <span>{ this.props.description }</span>
        </li>
      </ul>
    );
  }
}

export default ToDo;
