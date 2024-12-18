import { createSlice } from "@reduxjs/toolkit";
import { todos } from "./data/data";

const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [], // Array for storing todo items
    error: null, // To store any errors
    message: null, // For success or informational messages
    loader: false, // To handle loading state
  },
  reducers: {
    loadAllTodos: (state, action) => {
      state.todos = todos;
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
  },
});

export const { loadAllTodos, addTodo } = todoSlice.actions;
export default todoSlice.reducer;