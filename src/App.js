import { v4 as uuidv4 } from "uuid";
import { Component } from "react";
import TodoEditor from "./components/TodoEditor/TodoEditor";

import TodoList from "./components/TodoList";

import startTodos from "./todos.json";
import TodoFilter from "./components/TodoFilter/TodoFilter";

class App extends Component {
  state = {
    todos: startTodos,
    filter: "",
  };

  addTodo = (text) => {
    const todo = {
      id: uuidv4(),
      text: text,
      completed: false,
    };
    this.setState((prevState) => ({
      todos: [...prevState.todos, todo],
    }));
  };

  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== todoId),
    }));
  };

  toggleTodoCompleted = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { todos } = this.state;
    const { filter } = this.state;
    const totalTodos = todos.length;
    const completedTodos = todos.reduce(
      (acc, todo) => (todo.completed ? acc + 1 : acc),
      0
    );
    const notCompletedTodos = totalTodos - completedTodos;
    const visibleTodos = todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div>
        <TodoFilter onChangeFilter={this.changeFilter} />

        <TodoList
          todos={visibleTodos}
          onDeleteTodo={this.deleteTodo}
          onToggleCompleted={this.toggleTodoCompleted}
        />
        <p>Total tasks: {totalTodos}</p>
        <p>Completed tasks: {completedTodos}</p>
        <p>Tasks to complete : {notCompletedTodos}</p>
        <TodoEditor onSubmit={this.addTodo} />
      </div>
    );
  }
}

export default App;
