import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { toDosReducer } from "./features/todos/todosSlice";

export const store = configureStore({
  reducer: { todos: toDosReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
