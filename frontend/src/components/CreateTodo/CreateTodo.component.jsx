import React from "react";

class CreateTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: "",
    };
  }

  onChangeHandler = (e) => {
    this.setState({ todo: e.target.value });
  };

  onSubmitHandler = (e) => {
    this.props.addTodo(this.state.todo);
    this.setState({ todo: "" });
    e.preventDefault();
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmitHandler}>
        <input
          onChange={this.onChangeHandler}
          type="text"
          value={this.state.todo}
          autoFocus
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}

export default CreateTodo;
