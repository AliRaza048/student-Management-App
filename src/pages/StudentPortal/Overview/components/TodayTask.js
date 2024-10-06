import { Card, Avatar, Button } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ProgressBar from "./ProgressBar";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
const TodayTask = () => {
  const monthlyTask = [
    {
      id: 1,
      img: (
        <img
          src={require("../../../../assets/thumb4-CyhabRNj.png")}
          className="h-40 mb-4 w-full object-cover rounded-lg"
        />
      ),
      title: "Creating Mobile Apps",
      lecture: "UI UX Design",
      progress: "Progress",
      day: "1 Days Left",
      avatar1: (
        <Avatar
          src={require("../../../../assets/avatar1-BitUNrbl.png")}
          sx={{
            width: "30px",
            height: "30px",
            position: "relative",
            left: "5px",
          }}
        />
      ),
      avatar2: (
        <Avatar
          src={require("../../../../assets/avatar2-4Zw0wyKV.png")}
          sx={{ width: "30px", height: "30px" }}
        />
      ),
      avatar3: (
        <Avatar
          src={require("../../../../assets/avatar3-CQVfZJmL.png")}
          sx={{
            width: "30px",
            height: "30px",
            position: "relative",
            right: "5px",
          }}
        />
      ),
      avatar4: (
        <Avatar
          src={require("../../../../assets/avatar4-UQqyHlpd.png")}
          sx={{
            width: "30px",
            height: "30px",
            position: "relative",
            right: "10px",
          }}
        />
      ),
      avatar5: (
        <Avatar
          src={require("../../../../assets/avatar5-Dut-0EdJ.png")}
          sx={{
            width: "30px",
            height: "30px",
            position: "relative",
            right: "15px",
          }}
        />
      ),
      progressBar: <ProgressBar />,
      clockIcon: <AccessTimeIcon />,
    },
  ];

  return (
    <Card className="p-6 m-0 w-[100%] card ">
      <div className="flex justify-between mb-4">
        <h1 className="text-base font-bold">Today Task</h1>
        <MoreHorizIcon />
      </div>
      {monthlyTask.map((task, index) => (
        <section className="mb-6 rounded-lg flex w-full">
          <aside className="w-full overview__activity__mentors rounded-md">
            {task.img}
            <h1 className="text-lg font-semibold">{task.title}</h1>
            <h1 style={{ color: "rgb(84, 87, 122)" }} className="text-md  mb-4">
              {task.lecture}
            </h1>
            <h1 className="text-base font-medium">{task.progress}</h1>
            {task.progressBar}
            <div className="flex justify-between mt-4">
              <h1 className="text-base">{task.day}</h1>
              <div className="flex  ">
                {task.avatar1}
                {task.avatar2}
                {task.avatar3}
                {task.avatar4}
                {task.avatar5}
              </div>
            </div>
          </aside>
        </section>
      ))}
      <div className="overview__border mb-6"></div>
      <div className="flex justify-between">
        <h1 className="text-base font-bold">Detail Task</h1>
        <h1 style={{ color: "rgb(84, 87, 122)" }} className="text-md  mb-4">
          UI / UX Designer
        </h1>
      </div>
      <div className="mb-14" >
        <div className="flex items-center gap-4 mb-4">
          <h1 className="overview__dailytask">1</h1>
          <p>Understanding the tools in Figma</p>
        </div>
        <div className="flex items-center gap-4 mb-4">
          <h1 className="overview__dailytask">2</h1>
          <p>Understand the basics of making designs</p>
        </div>
        <div className="flex items-center gap-4">
          <h1 className="overview__dailytask">3</h1>
          <p>Design a mobile application with figma</p>
        </div>
      </div>
      <div className="w-full flex justify-center" >
        <Button className="overview__button" >Go To Detail</Button>
      </div>
    </Card>
  );
};

export default TodayTask;
