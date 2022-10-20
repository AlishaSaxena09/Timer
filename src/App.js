import { useState } from "react";
import ListPreviousTasks from "./ListPreviousTasks";
import Timer from "./Timer";

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("__tta_tasks")) || [];
  });

  const addTask = (newTask) => {
    const tasks = JSON.parse(localStorage.getItem("__tta_tasks")) || [];
    tasks.push(newTask);
    localStorage.setItem("__tta_tasks", JSON.stringify(tasks));
    setTasks(tasks);
  };

  const editTask = (taskId, description) => {
    const tasks = JSON.parse(localStorage.getItem("__tta_tasks")) || [];
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, description } : task
    );
    localStorage.setItem("__tta_tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">Time Tracking Application</h1>
      <div className="w-full px-6 max-w-4xl mx-auto">
        <Timer addTask={addTask} />
        <hr className="mb-6" />
        <ListPreviousTasks tasks={tasks} editTask={editTask} />
      </div>
    </div>
  );
}

export default App;
