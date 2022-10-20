import React, { useState } from "react";
import EditTaskModal from "./EditTaskModal";

const ListPreviousTasks = ({ tasks, editTask }) => {
  const [editingTask, setEditingTask] = useState(null);
  return (
    <div className="flex items-center flex-col">
      <h2 className="font-bold text-2xl mb-6">Previous Tasks</h2>
      {tasks
        .sort((a, b) => b.completedOn - a.completedOn)
        .map((task) => (
          <div className="mb-6 rounded-md w-full bg-white border-gray-100 border py-3 px-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold">{task.name}</h3>
              <p>{task.description}</p>
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setEditingTask(task)}
              >
                Edit
              </button>
              <p className="mt-3">Completed On: {new Date(task.completedOn).toLocaleString()}</p>
            </div>
            <p className="ml-6">
              <span className="text-xl font-semibold">
                {String(Math.floor(Math.floor(task.timerInSeconds / 3600))).padStart(2, "0")}
              </span>
              <span className="text-xl font-semibold">:</span>
              <span className="text-xl font-semibold">
                {String(Math.floor(task.timerInSeconds / 60)).padStart(2, "0")}
              </span>
              <span className="text-xl font-semibold">:</span>
              <span className="text-xl font-semibold">
                {String(task.timerInSeconds % 60).padStart(2, "0")}
              </span>
            </p>
          </div>
        ))}
      <EditTaskModal
        editingTask={editingTask}
        setEditingTask={setEditingTask}
        editTask={editTask}
      />
    </div>
  );
};

export default ListPreviousTasks;
