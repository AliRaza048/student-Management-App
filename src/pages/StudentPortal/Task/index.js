import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddTaskTable from "./components/TaskTable";
import AddTaskModal from "./components/AddTaskModal";

const Task = () => {
  return (
    <main className="ml-left relative top-[6rem] p-4 task">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-semibold" color="rgb(20, 21, 34)">
          Weekly Mentors
        </h3>
        <AddTaskModal />
      </div>
      <AddTaskTable />
    </main>
  );
};

export default Task;
