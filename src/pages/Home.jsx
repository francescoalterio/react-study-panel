import React, { useContext } from "react";
import BoxLearning from "../components/BoxLearning";
import { GitHubButton } from "../components/GitHubButton";
import InfoHome from "../components/InfoHome";
import { UserContext } from "../context/UserContext";
import { useLogged } from "../hooks/useLogged";
import { useLogin } from "../hooks/useLogin";

const Home = () => {
  const [userData] = useContext(UserContext);
  const { loginWithGithub, logout } = useLogin();
  useLogged();

  const data = {
    learning: userData.learning.length,
    createdForUser: userData.created.length,
    dominated: userData.dominated.length,
  };

  return (
    <div className="w-full h-screen overflow-auto pb-20 ">
      <div className="w-full h-20 bg-[#111317] flex items-center justify-between px-3 ">
        <h1 className=" text-white text-2xl font-semibold">Dashboard</h1>
        <GitHubButton onClick={userData.userData ? logout : loginWithGithub} />
      </div>
      <div className="w-full flex justify-center  px-6">
        <InfoHome data={data} />
      </div>
      <div className="flex justify-center  px-6">
        <BoxLearning />
      </div>
    </div>
  );
};

export default Home;
