import React from "react";

import Todo from "../Todo/Todo";

const TodoList = ({ todos, deleteTodo }) => {
  const todosList =
    todos.length > 0 ? (
      todos.map(({ _id, todo }) => (
        <Todo key={_id} id={_id} todo={todo} deleteTodo={deleteTodo} />
      ))
    ) : (
      <h2>No todo yet!</h2>
    );

  return <div>{todosList}</div>;
};

export default TodoList;
