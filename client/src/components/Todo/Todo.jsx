import React from "react";

const Todo = ({ id, todo, deleteTodo }) => {
  const handleClick = () => {
    deleteTodo(id);
  };

  return (
    <div>
      <p>{todo}</p>
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default Todo;
