import React, { useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
const Sidebar = () => {
  const [dropDown, setDropDown] = useState(true);

  const sidebarItems = [
    {
      id: 1,
      name: "OverView",
      icon: <GridViewIcon />,
    },
    {
      id: 2,
      name: "Task",
      icon: <MenuBookOutlinedIcon />,
    },
    {
      id: 3,
      name: "Mentors",
      icon: <AccountCircleOutlinedIcon />,
    },
    {
      id: 4,
      name: "Messages",
      icon: <SmsOutlinedIcon />,
    },
    {
      id: 5,
      name: "Settings",
      icon: <SettingsOutlinedIcon />,
    },
  ];

  const handleDropdown = () => {
    setDropDown(!dropDown);
  };

  return (
    <section className=" bg-white flex flex-col  gap-2 fixed p-6 w-66 h-screen sidebar">
      {sidebarItems.map((item) => (
        <aside className="flex p-5 gap-2 text-textColor font-semibold cursor-pointer items-center">
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
          <h6>Sign In</h6>
          <h6>Sign Up</h6>
        </div>
      ) : (
        ""
      )}

      <figure class="sidebar__background__image">
        <section className="text-white font sidebar__background__image__text ">
          <h1 className="text-base font-semibold">Help Center</h1>
          {/* <p className="text-justify 	">
            Heaving Trouble in Learing? Please contact us for more question
          </p> */}
        </section>
      </figure>
    </section>
  );
};
export default Sidebar;
