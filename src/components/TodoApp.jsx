import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../slices/todosSlice";

const TodoApp = () => {
  const dispatch = useDispatch();
  const [todo, setTodo] = React.useState("");
  const todoList = useSelector((state) => state.todos);
  
  const handleClick = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: Date.now(), text: todo })); // Assuming each todo has a unique ID.
    setTodo("");
  };

  const handleClick2 = (e) => {
    e.preventDefault();
    if (todoList.length > 0) {
      dispatch(deleteTodo(todoList[todoList.length - 1].id)); // Delete the last added todo.
    }
  };

  return (
    <div>
      <form action="">
        <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
        <button type="submit" onClick={handleClick}>Add Todo</button>
        <button type="submit" onClick={handleClick2}>Delete Todo</button>
      </form>
      {todoList.map((todo) => (
        <div key={todo.id}>{todo.text}</div>
      ))}
    </div>
  );
};

export default TodoApp;
