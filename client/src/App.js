import React, { Fragment, useEffect, useState } from "react";

import Heading from "./components/Heading/Heading";
import CreateTodo from "./components/CreateTodo/CreateTodo";
import Todolist from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = async (todo) => {
    const res = await fetch("/api/todo", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ todo: todo }),
    });

    const newTodo = await res.json();

    setTodos((prevState) => {
      return [...prevState, newTodo];
    });
  };

  const deleteTodo = async (id) => {
    await fetch(`/api/todo/${id}`, {
      method: "DELETE",
    });

    setTodos((prevState) => {
      return prevState.filter((todo) => todo._id !== id);
    });
  };

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await fetch("/api/todos");
      const todos = await res.json();
      setTodos(todos);
    };

    fetchTodos();
  }, []);

  return (
    <Fragment>
      <Heading />
      <CreateTodo addTodo={addTodo} />
      <Todolist todos={todos} deleteTodo={deleteTodo} />
    </Fragment>
  );
};

export default App;
