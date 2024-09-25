import React from "react";
import Page from "../../../components/Page";
import { Typography } from "@mui/material";
import MenuWeek from "./components/Menu";
import TaskChart from "./components/TaskChart";

const Overview = () => {
  return (
    <Page>
      <main className="ml-left overview">
        <aside className=" p-6 w-7/12	 overview__containerOne">
          <section className="flex gap-8 rounded-lg mb-6	overview__containerOne__runningTask">
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
          <section className="p-4 rounded-lg mb-6 overview__activity">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-medium" color="rgb(20, 21, 34)">
                Activity
              </h3>
              <MenuWeek />
            </div>
            {/* <TaskChart/> */}
            <div class="wavy-line"></div>
          </section>
        </aside>
      </main>
    </Page>
  );
};

export default Overview;
