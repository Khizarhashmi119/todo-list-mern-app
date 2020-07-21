import React from "react";

class Todo extends React.Component {
  onClickHandler = () => {
    this.props.deleteTodo(this.props.id);
  };

  render() {
    return (
      <div>
        <p>{this.props.todo}</p>
        <button onClick={this.onClickHandler}>Delete</button>
      </div>
    );
  }
}

export default Todo;
