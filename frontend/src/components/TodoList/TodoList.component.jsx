import React from "react";

import Todo from "../Todo/Todo.component";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        {this.props.todos.map((todo) => (
          <Todo
            key={todo._id}
            id={todo._id}
            todo={todo.todo}
            deleteTodo={this.props.deleteTodo}
          />
        ))}
      </div>
    );
  }
}

export default TodoList;
