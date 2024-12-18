import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todoSlice";
import Swal from "sweetalert2";

export const AddTodoForm = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Pending");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show alert if task name is empty
    if (!name) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please provide a task name!",
        confirmButtonColor: "#3085d6",
      });
      return;
    }

    const newTodo = {
      id: Date.now(), // Unique ID
      name,
      status,
      description,
      createdBy: "Anonymous", // Or fetch from user context
    };

    dispatch(addTodo(newTodo));

    // Show success alert
    Swal.fire({
      icon: "success",
      title: "Task Created",
      text: "Your task has been added successfully!",
      confirmButtonColor: "#28a745",
    });

    // Reset form fields
    setName("");
    setStatus("Pending");
    setDescription("");
  };

  return (
    <form
      className="p-6 bg-gray-100 rounded-xl shadow-md"
      onSubmit={handleSubmit}
    >
      <h3 className="text-xl font-bold mb-4 text-gray-700">Add New Todo</h3>

      <div className="flex flex-wrap gap-4 mb-4">
        {/* Task Name Field */}
        <div className="flex-1">
          <label className="block text-gray-600 mb-2">Task Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border rounded focus:outline-blue-500"
          />
        </div>

        {/* Status Field */}
        <div className="flex-1">
          <label className="block text-gray-600 mb-2">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-3 border rounded focus:outline-blue-500"
          >
            <option value="Pending">Pending</option>
            <option value="Processing">Processing</option>
            <option value="Done">Done</option>
          </select>
        </div>
      </div>

      {/* Description Field */}
      <div className="mb-4">
        <label className="block text-gray-600 mb-2">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 border rounded focus:outline-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-all"
      >
        Create
      </button>
    </form>
  );
};
