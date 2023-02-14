import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";

const TodoList = (): JSX.Element => {
  const { getApiData } = useApi();
  const { todos } = useAppSelector((state) => state);
  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return (
    <>
      <h1>Todo List</h1>
      <form className="todo-form">
        {todos.map((todo) => (
          <input className="todo" key={todo.id}></input>
        ))}
      </form>
    </>
  );
};
export default TodoList;
