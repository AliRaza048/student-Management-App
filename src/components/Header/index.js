import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

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
        className=" language__selector__image"
      />
    ),
  },
];

const Header = () => {
  const defaultLanguage = languageSelector.find((item) => item.id === 1);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [selectLanguage, setSelectLanguage] = useState(defaultLanguage.img.props.src);


  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleSelectLanguage = (id) => {
    debugger;
    const selectFalg = languageSelector.find((item) => item.id === id);
    if (id == selectFalg.id) {
      return setSelectLanguage(selectFalg.img.props.src);
    } else {
      alert("empty");
    }
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <nav className="bg-white p-4 flex items-center justify-between">
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
      <section className="flex items-center">
        <div className="p-2  language__selector">
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
      </section>
    </nav>
  );
};

export default Header;
