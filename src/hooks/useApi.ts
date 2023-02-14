import { useCallback } from "react";
import { loadTodosActionCreator } from "../store/features/todos/todosSlice";
import { useAppDispatch } from "../store/hooks";
import { TodosListStructure } from "../types";

const useApi = () => {
  const dispatch = useAppDispatch();

  const getApiData = useCallback(async () => {
    const response = await fetch("https://galan-backend.onrender.com/toDoList");
    const apiData = (await response.json()) as TodosListStructure;
    dispatch(loadTodosActionCreator(apiData));
  }, [dispatch]);

  return { getApiData };
};

export default useApi;
