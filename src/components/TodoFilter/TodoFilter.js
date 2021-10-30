import React from "react";

class TodoFilter extends React.Component {
  render() {
    return (
      <div>
        <label>
          <input type="text" onChange={this.props.onChangeFilter}></input>
          Filter
        </label>
      </div>
    );
  }
}

export default TodoFilter;
