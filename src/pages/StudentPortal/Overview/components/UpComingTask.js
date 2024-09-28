import React from "react";
import { Avatar, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ProgressBar from "./ProgressBar";

const UpComingTask = () => {
  const monthlyTask = [
    {
      id: 1,
      img: <img src={require("../../../../assets/thumb4-CyhabRNj.png")} />,
      title: "Creating Awesome Mobile Apps",
      lecture: "UI UX Design",
      progress: "Progress",
      day: "1 Days Left",
      avatar1: (
        <Avatar src={require("../../../../assets/avatar1-BitUNrbl.png")} />
      ),
      avatar2: (
        <Avatar src={require("../../../../assets/avatar2-4Zw0wyKV.png")} />
      ),
      avatar3: (
        <Avatar src={require("../../../../assets/avatar3-CQVfZJmL.png")} />
      ),
      avatar4: (
        <Avatar src={require("../../../../assets/avatar4-UQqyHlpd.png")} />
      ),
      avatar5: (
        <Avatar src={require("../../../../assets/avatar5-Dut-0EdJ.png")} />
      ),
      progressBar: <ProgressBar />,
      clockIcon: <AccessTimeIcon />,
    },
  ];

  return (
    <React.Fragment>
      <section className=" mb-4 flex justify-between items-center ">
        <h3 className="text-2xl font-semibold" color="rgb(20, 21, 34)">
          Monthly Mentors
        </h3>
        <div className="flex cursor-pointer">
          <IconButton className="backward__icon2">
            <ArrowBackIosIcon
              className="cursor-pointer"
              color="#272834"
              fontSize="medium"
            />
          </IconButton>
          <IconButton className="forward__icon2">
            <ArrowForwardIosIcon
              className="cursor-pointer"
              color="#272834"
              fontSize="medium"
            />
          </IconButton>
        </div>
      </section>
      <section className=" mb-6 rounded-lg  flex w-full">
        <aside className="p-4 w-full overview__activity__mentors rounded-md"></aside>
      </section>
    </React.Fragment>
  );
};

export default UpComingTask;
