import React, { useContext } from "react";
import { IoLogoGithub } from "react-icons/io5";
import { UserContext } from "../context/UserContext";

export function GitHubButton({ onClick }) {
  const [user] = useContext(UserContext);

  return (
    <button
      className="flex items-center gap-3 text-white border-2 border-white px-3 py-1 rounded-md font-medium text-sm"
      onClick={onClick}
    >
      {user.userData ? (
        <img src={user.userData.photoURL} width={25} />
      ) : (
        <IoLogoGithub size={25} />
      )}
      {user.userData ? "Log out" : "Sign in with GitHub"}
    </button>
  );
}
