import React from "react";

import Heading from "./components/Heading/Heading.component";
import CreateTodo from "./components/CreateTodo/CreateTodo.component";
import Todolist from "./components/TodoList/TodoList.component";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [],
    };
  }

  addTodo = async (todo) => {
    const res = await fetch("http://localhost:5000/api/todo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ todo: todo }),
    });

    const todos = await res.json();
    this.setState({ todos: todos });
  };

  deleteTodo = async (id) => {
    const res = await fetch(`http://localhost:5000/api/todo/${id}`, {
      method: "DELETE",
    });

    const todos = await res.json();
    this.setState({ todos: todos });
  };

  async componentDidMount() {
    const res = await fetch("http://localhost:5000/api/todos");
    const todos = await res.json();
    this.setState({ todos: todos });
  }

  render() {
    return (
      <div>
        <Heading />
        <CreateTodo addTodo={this.addTodo} />
        <Todolist todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
