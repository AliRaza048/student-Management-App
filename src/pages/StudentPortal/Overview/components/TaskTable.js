import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import OverViewTable from "../OverViewTable";

const TaskTable = () => {
  return (
    <React.Fragment>
      <section className="mb-4 flex justify-between items-center ">
        <h3 className="text-2xl font-semibold" color="rgb(20, 21, 34)">
          Task Overview
        </h3>
        <aside className="flex items-center header__Input p-2 rounded-md w-2/4">
          <input
            placeholder="Search Task"
            className="w-full  header__Input__field"
          />
          <SearchOutlinedIcon className="header__Input__icon" />
        </aside>
    </section>
    <OverViewTable/>
    </React.Fragment>
  );
};

export default TaskTable;
