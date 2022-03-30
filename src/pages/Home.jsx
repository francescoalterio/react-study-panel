import React, { useState, useEffect } from "react";
import BoxLearning from "../components/BoxLearning";
import InfoHome from "../components/InfoHome";
import { conexionLocalStorage } from "../utils/conexionLocalStorage";

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const learning = conexionLocalStorage("learning");
    const createdForUser = conexionLocalStorage("createdForUser");
    const dominated = conexionLocalStorage("dominated");

    setData({
      learning: learning ? learning.length : 0,
      createdForUser: createdForUser ? createdForUser.length : 0,
      dominated: dominated ? dominated.length : 0,
    });
  }, []);

  return (
    <div className="w-full h-screen overflow-auto">
      <InfoHome data={data} />
      <div className="flex justify-center ">
        <BoxLearning setData={setData} />
      </div>
    </div>
  );
};

export default Home;
