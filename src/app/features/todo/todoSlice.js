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
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    markTodoAsDone: (state, action) => {
      const index = state.todos.findIndex((todo) => todo.id === action.payload);
      state.todos[index].status = "Done";
    },
  },
});

export const { loadAllTodos, addTodo, deleteTodo, markTodoAsDone } = todoSlice.actions;
export default todoSlice.reducer;