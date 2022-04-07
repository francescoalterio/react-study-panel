import React, { useState, useEffect, useContext } from "react";
import BoxLearning from "../components/BoxLearning";
import InfoHome from "../components/InfoHome";
import { UserContext } from "../context/UserContext";
import { useLogged } from "../hooks/useLogged";

const Home = () => {
  const [user, handleUser] = useContext(UserContext);
  const [data, setData] = useState(null);

  useLogged();

  useEffect(() => {
    setData({
      learning: user.learning ? user.learning.length : 0,
      createdForUser: user.created ? user.created.length : 0,
      dominated: user.dominated ? user.dominated.length : 0,
    });
  }, [user]);

  return (
    <div className="w-full h-screen overflow-auto pb-20">
      <div className="w-full flex justify-center">
        <InfoHome data={data} />
      </div>
      <div className="flex justify-center ">
        <BoxLearning setData={setData} />
      </div>
    </div>
  );
};

export default Home;
