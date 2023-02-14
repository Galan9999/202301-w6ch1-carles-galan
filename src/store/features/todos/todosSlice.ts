import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosListStructure } from "../../../data/types";

export const initialTodos: TodosListStructure = [
  { id: 1, name: "tomatoes", isDone: false },
];

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    loadTodos: (
      currentTodos: TodosListStructure,
      action: PayloadAction<TodosListStructure>
    ) => [...action.payload],
  },
});

export const toDosReducer = todosSlice.reducer;
export const { loadTodos: loadTodosActionCreator } = todosSlice.actions;
