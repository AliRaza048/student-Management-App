import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const Header = () => {
  return (
    <nav className="bg-white p-4 flex items-center">
      <section className="flex items-center w-1/2 justify-between">
        <ul className="flex items-center gap-3">
          <img
            src={require("../../assets/download.png")}
            className="w-12 cursor-pointer"
          />
          <h1 className="text-4xl font-semibold">DNX</h1>
        </ul>
        <aside className="flex items-center header__Input p-2 rounded-md w-7/12" >
          <input  placeholder="Search Task" className="w-full  header__Input__field" />
            <SearchOutlinedIcon className="header__Input__icon" />
        </aside>
      </section>
      
    </nav>
  );
};

export default Header;
