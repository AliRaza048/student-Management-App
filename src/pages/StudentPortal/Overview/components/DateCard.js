import React, { useState, useEffect } from "react";
import { Card, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import moment from "moment";
import TodayTask from "./TodayTask";

const DateCard = () => {
  const today = moment().format("D");
  const [weekDays, setWeekDays] = useState([]);

  useEffect(() => {
    const getWeekDays = (date) => {
      const startOfWeek = moment(date).startOf("week");
      const endOfWeek = moment(date).endOf("week");

      const daysArray = [];
      let currentDay = startOfWeek;

      while (currentDay.isSameOrBefore(endOfWeek)) {
        daysArray.push({
          day: currentDay.format("dddd").charAt(0),
          date: currentDay.format("D"),
        });
        currentDay = currentDay.add(1, "days");
      }

      return daysArray;
    };

    const fullWeek = getWeekDays(moment());
    setWeekDays(fullWeek);
  }, []);

  return (
    <main className=" p-5 mt-[100px] w-full">
      <Card className="p-6 mb-5 card">
        <div className="flex justify-between items-center mb-6">
          <ArrowBackIosIcon fontSize="small" />
          <h1 className="font-semibold">October 2024</h1>
          <ArrowForwardIosIcon fontSize="small" />
        </div>
        <div className="flex w-full justify-between items-center">
          {weekDays.map((week) => (
            <div
              className="flex flex-col justify-center items-center gap-2 text-xl font-medium week"
              style={{
                backgroundColor:
                  week.date === today ? "#141522" : "transparent",
                color: week.date === today ? "white" : "black",
                padding: "4px",
                borderRadius: "20px",
                height: "75px",
              }}
            >
              <h1>{week.day}</h1>
              <h1
                style={{
                  backgroundColor: week.date === today ? "#546FFF" : "#F5F5F7",
                  color: week.date === today ? "white" : "black",
                  borderRadius: "50%",
                  height: "32px",
                  width: "32px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {week.date}
              </h1>
            </div>
          ))}
        </div>
      </Card>
      <TodayTask/>
    </main>
  );
};

export default DateCard;
