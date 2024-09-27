import React from "react";
import Page from "../../../components/Page";
import { Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AddIcon from "@mui/icons-material/Add";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
const Overview = () => {
  const teachersData = [
    {
      id: 1,
      img: <img src={require("../../../assets/avatar1-BitUNrbl.png")} />,
      teacherName: "Curious George",
      lectureNAME: "UI UX Design",
      lecture: 60,
      follow: "Follow",
      addIcon: <AddIcon />,
      taskIcon: <ContentCopyIcon />,
      task: "60 Task",
      reviews: "4.9(470 Reviews)",
    },
    {
      id: 2,
      img: <img src={require("../../../assets/avatar2-4Zw0wyKV.png")} />,
      teacherName: "Abraham Lincoln",
      lectureNAME: "3D Design",
      lecture: 60,
      follow: "Followed",
      addIcon: <AddIcon />,
      taskIcon: <ContentCopyIcon />,
      task: "32 Task",
      reviews: "4.9(510 Reviews)",
    },
    {
      id: 3,
      img: <img src={require("../../../assets/avatar3-CQVfZJmL.png")} />,
      teacherName: "Alex Stanton",
      lectureNAME: "UI UX Designer",
      lecture: 60,
      follow: "Followed",
      addIcon: <AddIcon />,
      taskIcon: <ContentCopyIcon />,
      task: "32 Task",
      reviews: "4.9(510 Reviews)",
    },
  ];

  return (
    <Page>
      <main className="ml-left overview">
        <aside className=" p-6 w-7/12	 overview__containerOne">
          <section className="flex gap-8 rounded-lg mb-10	overview__containerOne__runningTask">
            <div className=" p-4 font-medium">
              <h1 className="text-lg	">Running Task</h1>
              <h1 className="text-3xl	mt-4">65</h1>
            </div>
            <div className="flex  gap-3">
              <div className="overview__containerOne__borderCircle__container">
                <h1 className="overview__containerOne__borderCircle__container__title">
                  45%
                </h1>
              </div>
              <div className="flex flex-col	justify-center items-center text-3xl">
                <Typography fontSize={"23px"}>100</Typography>
                <Typography color={"#5C7BD9"}>Task</Typography>
              </div>
            </div>
          </section>
          <section className="p-2rounded-lg mb-6 overview__activity">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold" color="rgb(20, 21, 34)">
                Weekly Mentors
              </h3>
              <div className="flex cursor-pointer">
                <ArrowBackIosIcon
                  className="cursor-pointer"
                  color="#272834"
                  fontSize="small"
                />
                <ArrowForwardIosIcon
                  className="cursor-pointer"
                  color="#272834"
                  fontSize="small"
                />
              </div>
            </div>

          </section>
        </aside>
      </main>
    </Page>
  );
};

export default Overview;
