import React, { useEffect, useState } from "react";
import ModalWrapper from "./ModalWrapper";

const EditTaskModal = ({ editingTask, setEditingTask, editTask }) => {
  const [taskDescription, setTaskDescription] = useState(editingTask?.description);

  const handleSubmitTask = (e) => {
    e.preventDefault();
    if (taskDescription.length === 0) {
      alert("Please provide task description!");
      return;
    }
    editTask(editingTask.id, taskDescription);
    setEditingTask(null);
  };
  useEffect(() => {
    setTaskDescription(editingTask?.description || "");
  }, [editingTask]);

  return (
    <ModalWrapper show={Boolean(editingTask)} setShow={() => setEditingTask(null)}>
      <h3 className="font-bold text-2xl mb-6 text-center">Edit Task</h3>
      <form onSubmit={handleSubmitTask}>
        <label className="block mt-4">
          <span className="text-gray-700">Task Description</span>
          <textarea
            rows={3}
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm  focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 "
            placeholder="Name of the task"
          />
        </label>
        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={() => setEditingTask(null)}
            className="px-6 uppercase py-2 font-bold text-white bg-red-500 rounded-md hover:bg-opacity-90 disabled:bg-stone-300 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="ml-6 px-6 uppercase py-2 font-bold text-white bg-green-500 rounded-md hover:bg-opacity-90 disabled:bg-stone-300 disabled:cursor-not-allowed"
          >
            Submit
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default EditTaskModal;
