import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadAllTodos } from "./app/features/todo/todoSlice";
import { Todo } from "./app/features/todo/components/Todo";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAllTodos());
  }, [dispatch]); // Make sure dispatch is in dependencies array to avoid warnings

  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
