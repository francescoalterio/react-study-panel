import React from "react";
import NavButton from "./NavButton";

const NavBar = () => {
  return (
    <nav className="w-52 bg-zinc-800 h-screen flex flex-col">
      <header className="w-full h-28 flex justify-center items-center border-b-purple-700 border-b-2 mb-5">
        <h1 className="text-white text-2xl font-bold">Study Panel</h1>
      </header>
      <div className=" w-full flex flex-col items-end">
        <NavButton content="Home" to="/" />
        <NavButton content="Technologies" to="/technologies" />
        <NavButton content="Dominated" to="/dominated" />
      </div>
    </nav>
  );
};

export default NavBar;
