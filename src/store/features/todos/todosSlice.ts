import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodosListStructure } from "../../../types";

const initialTodos: TodosListStructure = [];

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    loadTodos: (currentTodos, action: PayloadAction<TodosListStructure>) => [
      ...action.payload,
    ],
  },
});

export const toDosReducer = todosSlice.reducer;
export const { loadTodos: loadTodosActionCreator } = todosSlice.actions;
