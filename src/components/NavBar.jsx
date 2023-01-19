import React, { useContext } from "react";
import NavButton from "./NavButton";
import { useTheme } from "../hooks/useTheme";
import { useNavigate } from "react-router-dom";
import { UserContext, initialState } from "../context/UserContext";
import { getAuth, signOut } from "firebase/auth";

import {
  IoBriefcaseOutline,
  IoHomeOutline,
  IoLogInOutline,
  IoLogoReact,
  IoLogOutOutline,
  IoMoonOutline,
  IoSunnyOutline,
} from "react-icons/io5";

const NavBar = () => {
  const [theme, handleTheme] = useTheme();
  const navigate = useNavigate();

  const [user, handleUser] = useContext(UserContext);

  const handleLogin = () => {
    if (!user.email) {
      navigate("/login");
    } else {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          handleUser(initialState);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <nav className=" lg:w-60 bg-[#111317] lg:h-screen flex lg:flex-col w-full h-16 fixed bottom-0 lg:relative">
      <header className="w-full h-28 lg:flex justify-center items-center mb-5 hidden">
        <h1 className="text-white text-2xl font-bold">Study Panel</h1>
      </header>
      <div className=" w-full lg:h-full flex lg:justify-between lg:flex-col lg:items-end">
        <div className="w-full flex justify-center lg:flex-col lg:items-end gap-6">
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
        <div className=" w-full flex items-center justify-between p-5">
          <button onClick={handleLogin} className=" text-xl text-white">
            {!user.email ? <IoLogInOutline /> : <IoLogOutOutline />}
          </button>
          <button className=" text-white text-xl " onClick={handleTheme}>
            {theme === "light" ? <IoMoonOutline /> : <IoSunnyOutline />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
