import React, { useContext } from "react";
import BoxLearning from "../components/BoxLearning";
import InfoHome from "../components/InfoHome";
import { UserContext } from "../context/UserContext";
import { useLogged } from "../hooks/useLogged";

const Home = () => {
  const [user, handleUser] = useContext(UserContext);

  useLogged();

  const data = {
    learning: user.learning.length,
    createdForUser: user.created.length,
    dominated: user.dominated.length,
  };

  return (
    <div className="w-full h-screen overflow-auto pb-20">
      <div className="w-full flex justify-center">
        <InfoHome data={data} />
      </div>
      <div className="flex justify-center ">
        <BoxLearning />
      </div>
    </div>
  );
};

export default Home;
