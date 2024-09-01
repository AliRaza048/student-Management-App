import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import SwitchAccountIcon from "@mui/icons-material/SwitchAccount";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import Sidebar from "../Sidebar/index"
const settings = [
  {
    id: 1,
    name: "View Profile",
    icon: <AccountCircleOutlinedIcon sx={{ color: "rgb(84, 87, 122)" }} />,
  },
  {
    id: 2,
    name: "Account Setting",
    icon: <SettingsIcon sx={{ color: "rgb(84, 87, 122)" }} />,
  },
  {
    id: 3,
    name: "Notifications",
    icon: <NotificationsIcon sx={{ color: "rgb(84, 87, 122)" }} />,
  },
  {
    id: 4,
    name: "Swich Account",
    icon: <SwitchAccountIcon sx={{ color: "rgb(84, 87, 122)" }} />,
  },
  {
    id: 5,
    name: "Help Center",
    icon: <HelpOutlineIcon sx={{ color: "rgb(84, 87, 122)" }} />,
  },
  {
    id: 6,
    name: "Logout",
    icon: <LogoutIcon sx={{ color: "rgb(84, 87, 122)" }} />,
  },
];

const languageSelector = [
  {
    id: 1,
    language: "English",
    name: "eng",
    img: (
      <img
        src={require("../../assets/united-states-of-america.png")}
        className=" language__selector__image"
      />
    ),
  },
  {
    id: 2,
    name: "ban",
    language: "बांग्लादेश",
    img: (
      <img
        src={require("../../assets/bangladesh-flag-icon.png")}
        className="language__selector__image"
      />
    ),
  },
  {
    id: 3,
    name: "cha",
    language: "中國",
    img: (
      <img
        src={require("../../assets/china.png")}
        className=" language__selector__image"
      />
    ),
  },
  {
    id: 4,
    name: "spa",
    language: "idioma",
    img: (
      <img
        src={require("../../assets/spain-country-flag-icon.png")}
        className=" language__selector__image"
      />
    ),
  },
  {
    id: 5,
    name: "tur",
    language: "türkçe",
    img: (
      <img
        src={require("../../assets/turkey-flag-icon.png")}
        className="language__selector__image"
      />
    ),
  },
];

const Header = () => {
  const defaultLanguage = languageSelector.find((item) => item.id === 1);
  const [selectLanguage, setSelectLanguage] = useState(
    defaultLanguage.img.props.src
  );
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [avatarUser, setAvatarUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleAvatarOpenMenu = (event) => {
    setAvatarUser(event.currentTarget);
  };

  const handleAvatarCloseUserMenu = () => {
    setAvatarUser(null);
  };

  const handleSelectLanguage = (id) => {
    debugger;
    const selectFalg = languageSelector.find((item) => item.id === id);
    if (id == selectFalg.id) {
      return setSelectLanguage(selectFalg.img.props.src);
    } else {
      setSelectLanguage("");
    }
  };

  return (
    <React.Fragment>
    <nav className="bg-white p-6 flex items-center justify-between">
      <section className="flex items-center w-1/2 justify-between">
        <ul className="flex items-center gap-3">
          <img
            src={require("../../assets/download.png")}
            className="w-12 cursor-pointer"
          />
          <h1 className="text-4xl font-semibold">DNX</h1>
        </ul>
        <aside className="flex items-center header__Input p-2 rounded-md w-7/12">
          <input
            placeholder="Search Task"
            className="w-full  header__Input__field"
          />
          <SearchOutlinedIcon className="header__Input__icon" />
        </aside>
      </section>
      <section className="flex items-center gap-4">
        <div className="p-4 language__selector">
          <button onClick={handleOpenUserMenu}>
            <img src={selectLanguage} className="language__selector__image" />
          </button>
          <Menu
            sx={{ mt: "50px", marginLeft: "1rem" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {languageSelector.map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => handleSelectLanguage(setting.id, setting.img)}
                sx={{ justifyContent: "space-between", width: "200px" }}
              >
                <div className="flex gap-4">
                  <Typography textAlign="center">{setting.img}</Typography>
                  <Typography textAlign="center">{setting.language}</Typography>
                </div>
                <div>
                  <Typography textAlign="center">{setting.name}</Typography>
                </div>
              </MenuItem>
            ))}
          </Menu>
        </div>
        <div className="p-4  language__selector">
          <Badge
            badgeContent={1}
            color="error"
          >
            <NotificationsIcon sx={{ color: "#bdb3b3e7" }} />
          </Badge>
        </div>
        <Box>
          <Tooltip title="Open settings">
            <IconButton onClick={handleAvatarOpenMenu} sx={{ p: 0 }}>
              <Avatar
                alt="Remy Sharp"
                src={require("../../assets/Profile_Image.jpg")}
                className="avatar__menu__image"
              />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{mt: "60px" }}
            id="menu-appbar"
            anchorEl={avatarUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(avatarUser)}
            onClose={handleAvatarCloseUserMenu}
          >
            <MenuItem
              onClick={handleAvatarCloseUserMenu}
              className="avatar__menu"
            >
              <section className="flex gap-3 items-center p-2 ml-1.5">
                <Avatar
                  alt="Remy Sharp"
                  src={require("../../assets/Profile_Image.jpg")}
                  className="avatar__menu__image"
                />
                <div>
                  <h4 className="font-bold text-sm">Alex Stanton</h4>
                  <p className="text-xs	">alex@example.com</p>
                </div>
              </section>
              <div className="border"></div>
              {settings.map((item) => (
                <section className="p-2 ml-1.5">
                  <div className="flex items-center gap-4">
                    {item.icon}
                    <Typography sx={{ color: "rgb(97 99 124)" }}>
                      {item.name}
                    </Typography>
                  </div>
                </section>
              ))}
            </MenuItem>
          </Menu>
        </Box>
      </section>
    </nav>
    <Sidebar/>
    </React.Fragment>
  );
};

export default Header;
