import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";
// Create redux store
export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
