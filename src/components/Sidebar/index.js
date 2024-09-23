import React, { useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Sidebar = () => {
  const navigate = useNavigate();
  const [dropDown, setDropDown] = useState(true);

  const sidebarItems = [
    {
      id: 1,
      name: "Overview",
      icon: <GridViewIcon />,
      path: "/",
    },
    {
      id: 2,
      name: "Task",
      icon: <MenuBookOutlinedIcon />,
      path: "/task",
    },
    {
      id: 3,
      name: "Mentors",
      icon: <AccountCircleOutlinedIcon />,
      path: "/mentors",
    },
    {
      id: 4,
      name: "Messages",
      icon: <SmsOutlinedIcon />,
      path: "/massage",
    },
    {
      id: 5,
      name: "Settings",
      icon: <SettingsOutlinedIcon />,
      path: "/setting",
    },
  ];

  const handleDropdown = () => {
    setDropDown(!dropDown);
  };

  return (
    <section className=" bg-white flex flex-col  gap-2 fixed p-6 w-62 h-screen sidebar">
      {sidebarItems.map((item) => (
        <aside
          className="flex p-5 gap-2 text-textColor font-semibold cursor-pointer items-center"
          onClick={() => navigate(item.path)}
        >
          {item.icon}
          <h4>{item.name}</h4>
        </aside>
      ))}

      <div
        className="flex p-5 gap-2 text-black font-semibold cursor-pointer items-center ease-in	"
        onClick={(value) => handleDropdown(value)}
      >
        <LockOutlinedIcon />
        <h4>Authentication</h4>
        {dropDown != true ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </div>

      {dropDown != true ? (
        <div className="flex relative bottom-4 right-8 flex-col items-center gap-4 text-black font-semibold text-sm ease-in cursor-pointer">
          <h6 onClick={() => navigate("/signup")}>Sign In</h6>
          <h6 onClick={() => navigate("/signin")}>Sign Up</h6>
        </div>
      ) : (
        ""
      )}

      <figure class="sidebar__background__image">
        <section className="text-white font sidebar__background__image__text ">
          <h1 className="text-base font-semibold">Help Center</h1>
          <p className="text-center text-sm	flex  m-1	">
            Heaving Trouble in Learing? Please contact us for more question
          </p>
          <Button className="sidebar__button">Go To Help Center</Button>
        </section>
      </figure>
    </section>
  );
};
export default Sidebar;
