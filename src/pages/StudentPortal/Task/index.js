import React, { useState } from "react";
import AddTaskTable from "./components/TaskTable";
import AddTaskModal from "./components/AddTaskModal";

const Task = () => {
  const [task, setTask] = useState({
    title: "",
    priorityLevel: [],
    status: [],
    date: "",
    description: "",
  });
  return (
    <main className="ml-left relative top-[6rem] p-4 task">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold" color="rgb(20, 21, 34)">
          Add Task
        </h3>
        <AddTaskModal task={task} setTask={setTask} />
      </div>
      <AddTaskTable />
    </main>
  );
};

export default Task;
