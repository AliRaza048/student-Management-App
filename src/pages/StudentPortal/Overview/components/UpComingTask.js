import React from "react";
import { Avatar, IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ProgressBar from "./ProgressBar";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
const UpComingTask = () => {
  const monthlyTask = [
    {
      id: 1,
      img: (
        <img
          src={require("../../../../assets/thumb4-CyhabRNj.png")}
          className="h-32 mb-4 w-full object-cover rounded-lg"
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
    {
      id: 2,
      img: (
        <img
          src={require("../../../../assets/thumb5-BQxtNF7l.png")}
          className="h-32 mb-4 w-full object-cover rounded-lg"
        />
      ),
      title: "Creating Awesome Mobile Apps",
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
    {
      id: 3,
      img: (
        <img
          src={require("../../../../assets/thumb6-BSiO-_4j.png")}
          className="h-32 mb-4 w-full object-cover rounded-lg"
        />
      ),
      title: "Creating Fresh Website",
      lecture: "Web Developer",
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
    {
      id: 43,
      img: (
        <img
          src={require("../../../../assets/thumb7-DB4Fgeph.png")}
          className="h-32 mb-4 w-full object-cover rounded-lg"
        />
      ),
      title: "Creating Color Palletes",
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
    <main className="mb-4">
      <section className="mb-4 flex justify-between items-center ">
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
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        className="landingPage__container__cardsContainer1__cards"
        navigation={{
          prevEl: ".backward__icon2",
          nextEl: ".forward__icon2",
        }}
        autoplay={{
          delay:3000,
          pauseOnMouseEnter: true,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {monthlyTask.map((task, index) => (
          <SwiperSlide key={index}>
            <section className=" mb-6 rounded-lg flex w-full">
              <aside className="p-6 w-full overview__activity__mentors rounded-md">
                {task.img}
                <h1 className="text-lg font-semibold">{task.title}</h1>
                <h1
                  style={{ color: "rgb(84, 87, 122)" }}
                  className="text-md  mb-4"
                >
                  {task.lecture}
                </h1>
                <h1 className="text-xl font-medium">{task.progress}</h1>
                {task.progressBar}
                <div className="flex justify-between mt-4">
                  <h1 className="text-lg">{task.day}</h1>
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
          </SwiperSlide>
        ))}
      </Swiper>
      {/* {monthlyTask.map((task) => (
        <section className=" mb-6 rounded-lg flex w-full">
          <aside className="p-6 w-full overview__activity__mentors rounded-md">
            {task.img}
            <h1 className="text-lg font-semibold">{task.title}</h1>
            <h1 style={{ color: "rgb(84, 87, 122)" }} className="text-md  mb-4">
              {task.lecture}
            </h1>
            <h1 className="text-xl font-medium">{task.progress}</h1>
            {task.progressBar}
            <div className="flex justify-between mt-4">
              <h1 className="text-lg">{task.day}</h1>
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
      ))} */}
    </main>
  );
};

export default UpComingTask;
