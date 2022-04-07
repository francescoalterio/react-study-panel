import React, { useContext } from "react";
import NavButton from "./NavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSuitcase,
  faAtom,
  faMoon,
  faSun,
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "../hooks/useTheme";
import { useNavigate } from "react-router-dom";
import { UserContext, initialState } from "../context/UserContext";
import { getAuth, signOut } from "firebase/auth";

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
        <div className=" fixed bottom-0 right-0 pl-10 m-5 lg:relative lg:flex lg:m-5"></div>
        <button
          onClick={handleLogin}
          className=" fixed bottom-0 left-0 m-3 block rounded-md border-2 border-zinc-900 w-12 h-10 text-white"
        >
          {!user.email ? (
            <FontAwesomeIcon icon={faRightToBracket} />
          ) : (
            <FontAwesomeIcon icon={faRightFromBracket} />
          )}
        </button>
        <div className=" fixed bottom-0 right-0 m-4 lg:relative lg:flex lg:m-5">
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
