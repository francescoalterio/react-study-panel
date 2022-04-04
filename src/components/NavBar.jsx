import React, { useEffect, useState } from "react";
import NavButton from "./NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSuitcase,
  faAtom,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../hooks/useTheme";

const NavBar = () => {
  const [theme, handleTheme] = useTheme();

  return (
    <nav className="lg:w-52 bg-zinc-800 lg:h-screen flex lg:flex-col w-full h-16 fixed bottom-0 lg:relative">
      <header className="w-full h-28 lg:flex justify-center items-center border-b-purple-700 border-b-2 mb-5 hidden">
        <h1 className="text-white text-2xl font-bold">Study Panel</h1>
      </header>
      <div className=" w-full lg:h-full flex lg:justify-between lg:flex-col lg:items-end">
        <div className="w-full flex justify-center lg:flex-col lg:items-end">
          <NavButton
            content="Home"
            to="/"
            icon={<FontAwesomeIcon icon={faHouse} />}
          />
          <NavButton
            content="Technologies"
            to="/technologies"
            icon={<FontAwesomeIcon icon={faAtom} />}
          />
          <NavButton
            content="Dominated"
            to="/dominated"
            icon={<FontAwesomeIcon icon={faSuitcase} />}
          />
        </div>
        <div className="fixed right-0 bottom-0 m-5 lg:relative lg:flex lg:m-5">
          <button className=" theme text-white text-xl " onClick={handleTheme}>
            {theme === "light" ? (
              <FontAwesomeIcon icon={faMoon} />
            ) : (
              <FontAwesomeIcon icon={faSun} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
