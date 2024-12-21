import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoForm } from "./AddTodoForm";
import { deleteTodo, markTodoAsDone } from "../todoSlice";

export const Todo = () => {
  const { todos, loading, error } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-yellow-100 text-yellow-700";
      case "Processing":
        return "bg-blue-100 text-blue-700";
      case "Done":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleMarkAsDone = (id) => {
    dispatch(markTodoAsDone(id));
  };

  return (
    <div className="container mx-auto w-3/4 p-6">
      <AddTodoForm />
      <div className="mt-10 bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-3xl font-bold text-blue-600 mb-6">All Todos</h3>
        <hr className="mb-6" />

        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {!loading && todos && todos.length === 0 && <div>No Todos Found</div>}

        {!loading && todos && todos.length > 0 && (
          <ul className="space-y-6">
            {todos.map((todo) => (
              <li
                key={todo.id}
                className={`p-5 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:bg-opacity-90 ${getStatusColor(
                  todo.status
                )}`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-xl font-semibold">{todo.name}</h4>
                    <p className="text-sm pt-1">{todo.description}</p>
                    <p className="text-sm font-medium">
                      Type: <span className="capitalize">{todo.status}</span>
                    </p>
                  </div>
                  <div className="flex space-x-4 opacity-0 hover:opacity-100 transition-all duration-300">
                    <p className="text-sm font-medium">
                      Type: <span className="capitalize">{todo.status}</span>
                    </p>

                    <button className="text-blue-500 hover:text-blue-700">
                      ✏️
                    </button>
                    <button
                      onClick={() => handleDeleteTodo(todo.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      🗑️
                    </button>
                    <button
                      onClick={() => handleMarkAsDone(todo.id)}
                      className="text-green-500 hover:text-green-700"
                      disabled={todo.status === "Done"}
                    >
                      ✔️
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
