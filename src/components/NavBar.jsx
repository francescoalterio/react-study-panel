import React, { useContext } from "react";
import NavButton from "./NavButton";
import { useTheme } from "../hooks/useTheme";
import { useNavigate } from "react-router-dom";
import { UserContext, initialState } from "../context/UserContext";
import { getAuth, signOut } from "firebase/auth";

import {
  IoBriefcaseOutline,
  IoHomeOutline,
  IoLogoReact,
} from "react-icons/io5";

const NavBar = () => {
  return (
    <nav className=" lg:w-60 bg-[#111317] lg:h-screen flex lg:flex-col w-full h-16 fixed bottom-0 lg:relative ">
      <header className="w-full h-28 lg:flex justify-center items-center mb-5 hidden">
        <img src="logo256.png" className="w-6" />
        <h1 className="text-white text-xl font-bold ml-2">Study Panel</h1>
      </header>
      <div className=" w-full lg:h-full flex lg:justify-between lg:flex-col lg:items-end">
        <div className="w-full flex pb-5 items-center lg:justify-center lg:flex-col lg:items-end gap-16 lg:gap-6 justify-center">
          <NavButton content="Home" to="/" icon={<IoHomeOutline />} />
          <NavButton
            content="Technologies"
            to="/technologies"
            icon={<IoLogoReact />}
          />
          <NavButton
            content="Dominated"
            to="/dominated"
            icon={<IoBriefcaseOutline />}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
