import React, { useState } from "react";

const CreateTodo = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" value={todo} autoFocus />
      <button disabled={!todo} type="submit">
        Add
      </button>
    </form>
  );
};

export default CreateTodo;
