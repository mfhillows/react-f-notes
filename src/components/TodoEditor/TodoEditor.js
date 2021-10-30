import React, { Component } from "react";

class TodoEditor extends Component {
  state = {
    text: "",
  };

  handleChange = (e) => {
    this.setState({ text: e.currentTarget.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <textarea
            onChange={this.handleChange}
            value={this.state.text}
          ></textarea>
          <button type="submit">Add new</button>
        </form>
      </div>
    );
  }
}

export default TodoEditor;
