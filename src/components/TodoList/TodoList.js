import classNames from "classnames/bind";
import s from "./TodoList.module.css";

let cx = classNames.bind(s);

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => {
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <li key={id} className={cx(s.item, { item_completed: completed })}>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          ></input>
          <p className={cx(s.text, { text_completed: completed })}>{text}</p>
          <button className={s.button} onClick={() => onDeleteTodo(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
