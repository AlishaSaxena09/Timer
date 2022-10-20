import React, { useEffect, useState } from "react";
import SubmitTaskModal from "./SubmitTaskModal";

const Timer = (props) => {
  const [timerInSeconds, setTimerInSeconds] = useState(0);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [isTimerPaused, setIsTimerPaused] = useState(false);
  const [isSubmittingTask, setIsSubmittingTask] = useState(false);

  useEffect(() => {
    if (isTimerStarted && !isTimerPaused) {
      const intervalId = window.setInterval(() => {
        setTimerInSeconds((timerInSeconds) => timerInSeconds + 1);
      }, 1000);

      return () => {
        window.clearInterval(intervalId);
      };
    }
  }, [isTimerStarted, isTimerPaused]);

  const startTimer = () => {
    if (!isTimerStarted) {
      setIsTimerStarted(true);
    } else {
      setIsTimerPaused(false);
    }
  };
  const pauseTimer = () => {
    setIsTimerPaused(true);
  };
  const submitTask = () => {
    setIsSubmittingTask(true);
  };

  const addNewTask = ({ name, description }) => {
    setIsTimerPaused(false);
    setIsTimerStarted(false);
    setTimerInSeconds(0);
    props.addTask({
      id: String.fromCharCode(65 + Math.floor(Math.random() * 26)) + Date.now(),
      name,
      description,
      timerInSeconds,
      completedOn: Date.now(),
    });
    alert("Task added successfully!");
  };

  return (
    <div className="flex flex-col items-center overflow-hidden">
      <div className="grid max-w-sm w-full  grid-cols-5 text-center align-middle">
        <span className="text-5xl font-bold">
          {String(Math.floor(Math.floor(timerInSeconds / 3600))).padStart(2, "0")}
        </span>
        <span className="text-5xl font-bold">:</span>
        <span className="text-5xl font-bold">
          {String(Math.floor(timerInSeconds / 60)).padStart(2, "0")}
        </span>
        <span className="text-5xl font-bold">:</span>
        <span className="text-5xl font-bold">{String(timerInSeconds % 60).padStart(2, "0")}</span>
        <span className="text-xl">HH</span>
        <span></span>
        <span className="text-xl">MM</span>
        <span></span>
        <span className="text-xl">SS</span>
      </div>
      <div className="my-6 flex flex-col sm:flex-row">
        <button
          disabled={isTimerStarted ? !isTimerPaused : false}
          onClick={startTimer}
          className="my-2 sm:my-0 px-6 uppercase py-2 font-bold text-white bg-green-500 rounded-md hover:bg-opacity-90 disabled:bg-stone-300 disabled:cursor-not-allowed"
        >
          Start
        </button>
        <button
          disabled={isTimerStarted ? isTimerPaused : true}
          onClick={pauseTimer}
          className="my-2 sm:my-0 sm:ml-6 px-6 uppercase py-2 font-bold text-white bg-blue-500 rounded-md hover:bg-opacity-90 disabled:bg-stone-300 disabled:cursor-not-allowed"
        >
          Pause
        </button>
        <button
          onClick={submitTask}
          disabled={!isTimerStarted}
          className="my-2 sm:my-0 sm:ml-6 px-6 uppercase py-2 font-bold text-white bg-red-500 rounded-md hover:bg-opacity-90 disabled:bg-stone-300 disabled:cursor-not-allowed"
        >
          Save
        </button>
      </div>
      <SubmitTaskModal
        isSubmittingTask={isSubmittingTask}
        setIsSubmittingTask={setIsSubmittingTask}
        addNewTask={addNewTask}
      />
    </div>
  );
};

export default Timer;
