import { useEffect } from "react";
import useApi from "../../hooks/useApi";
import { useAppSelector } from "../../store/hooks";
import TodoListStyled from "./todoListSyled";

const TodoList = (): JSX.Element => {
  const { getApiData } = useApi();
  const { todos } = useAppSelector((state) => state);
  useEffect(() => {
    getApiData();
  }, [getApiData]);

  return (
    <>
      <h1>Todo List</h1>

      <TodoListStyled>
        {todos.map((todo) => (
          <div className="todolist">
            <li className="todo" key={todo.id}>
              {todo.name}
              <button className="button"></button>
            </li>
          </div>
        ))}
      </TodoListStyled>
    </>
  );
};
export default TodoList;
