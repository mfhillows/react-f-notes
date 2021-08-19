import { Component } from "react";

import TodoList from "./components/TodoList";

import todos from "./todos.json";

class App extends Component {
  state = {
    todos: todos,
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;
    const totalTodos = todos.length;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    return (
      <div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
        <p>Total tasks: {totalTodos}</p>
        <p>Completed tasks: {completedTodos}</p>
      </div>
    );
  }
}

export default App;
