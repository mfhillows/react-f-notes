import s from "./TodoList.module.css";

const TodoList = ({ todos, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map(({ id, text, completed }) => (
        <li key={id} className={s.item}>
          <p className={s.text}>{text}</p>
          <button className={s.button} onClick={() => onDeleteTodo(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
