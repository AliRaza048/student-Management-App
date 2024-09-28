import React from "react";
import Page from "../../../components/Page";
import { Avatar,IconButton, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import Teachers from "./components/Teachers";
import AddIcon from "@mui/icons-material/Add";
import StarIcon from "@mui/icons-material/Star";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import UpComingTask from "./components/UpComingTask";
const Overview = () => {
  const teachersData = [
    {
      id: 1,
      img: (
        <Avatar
          src={require("../../../assets/avatar1-BitUNrbl.png")}
          sx={{ width: "55px", height: "55px" }}
          className="cursor-pointer"
        />
      ),
      teacherName: "Curious George",
      lectureNAME: "UI UX Design",
      lecture: 60,
      follow: "Follow",
      addIcon: <AddIcon />,
      taskIcon: <ContentCopyIcon sx={{ color: "rgb(84, 87, 122)" }} />,
      task: "60 Task",
      reviews: "4.9(470 Reviews)",
      starIcon: <StarIcon sx={{ color: "rgb(255, 176, 84)" }} />,
      type:"follow"
    },
    {
      id: 2,
      img: (
        <Avatar
          src={require("../../../assets/avatar2-4Zw0wyKV.png")}
          sx={{ width: "55px", height: "55px" }}
          className="cursor-pointer"
        />
      ),
      teacherName: "Abraham Lincoln",
      lectureNAME: "3D Design",
      lecture: 60,
      follow: "Follow",
      addIcon: <AddIcon />,
      taskIcon: <ContentCopyIcon sx={{ color: "rgb(84, 87, 122)" }} />,
      task: "32 Task",
      reviews: "4.9(510 Reviews)",
      starIcon: <StarIcon sx={{ color: "rgb(255, 176, 84)" }} />,
      type:"follow"
    },
    {
      id: 3,
      img: (
        <Avatar
          src={require("../../../assets/avatar3-CQVfZJmL.png")}
          sx={{ width: "55px", height: "55px" }}
          className="cursor-pointer"
        />
      ),
      teacherName: "Alex Stanton",
      lectureNAME: "UI UX Designer",
      lecture: 60,
      follow: "Follow",
      addIcon: <AddIcon />,
      taskIcon: <ContentCopyIcon sx={{ color: "rgb(84, 87, 122)" }} />,
      task: "32 Task",
      reviews: "4.9(510 Reviews)",
      starIcon: <StarIcon sx={{ color: "rgb(255, 176, 84)" }} />,
      type:"follow"
    },
    {
      id: 4,
      img: (
        <Avatar
          src={require("../../../assets/avatar4-UQqyHlpd.png")}
          sx={{ width: "55px", height: "55px" }}
          className="cursor-pointer"
        />
      ),
      teacherName: "Richard Kyle",
      lectureNAME: "2D Design",
      lecture: 60,
      addIcon: <AddIcon />,
      taskIcon: <ContentCopyIcon sx={{ color: "rgb(84, 87, 122)" }} />,
      task: "32 Task",
      reviews: "4.9(510 Reviews)",
      starIcon: <StarIcon sx={{ color: "rgb(255, 176, 84)" }} />,
      type:"followed"
    },
  ];
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
          <section className="overview__activity">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-semibold" color="rgb(20, 21, 34)">
                Weekly Mentors
              </h3>
              <div className="flex cursor-pointer">
                <IconButton className="backward__icon">
                  <ArrowBackIosIcon
                    className="cursor-pointer"
                    color="#272834"
                    fontSize="medium"
                    />
                </IconButton>
                <IconButton className="forward__icon">
                  <ArrowForwardIosIcon
                    className="cursor-pointer"
                    color="#272834"
                    fontSize="medium"
                    />
                </IconButton>
              </div>
            </div>
            <Swiper
              modules={[Navigation, Pagination, A11y, Autoplay]}
              spaceBetween={10}
              slidesPerView={1}
              className="landingPage__container__cardsContainer1__cards"
              navigation={{
                prevEl: ".backward__icon",
                nextEl: ".forward__icon",
              }}
              autoplay={{
                delay: 2000,
                pauseOnMouseEnter: true,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              {teachersData.map((item, index) => (
                <SwiperSlide key={index}>
                  <Teachers item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
          <UpComingTask/>
        </aside>
      </main>
    </Page>
  );
};

export default Overview;
