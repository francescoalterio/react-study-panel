import React, { useEffect, useState } from "react";
import { conexionLocalStorage } from "../utils/conexionLocalStorage";
import Technology from "./Technology";

const BoxLearning = ({ setData }) => {
  const [learning, setLearning] = useState([]);

  useEffect(() => {
    const learningTechnologies = conexionLocalStorage("learning");
    learningTechnologies && setLearning(learningTechnologies);
  }, []);

  const setInfo = () => {
    const learningData = conexionLocalStorage("learning");
    const createdForUserData = conexionLocalStorage("createdForUser");
    const dominatedData = conexionLocalStorage("dominated");

    setData({
      learning: learningData ? learningData.length : 0,
      createdForUser: createdForUserData ? createdForUserData.length : 0,
      dominated: dominatedData ? dominatedData.length : 0,
    });
  };

  const handleDelete = (id) => {
    const techEliminated = learning.filter((tech) => tech.id !== id);
    conexionLocalStorage("learning", techEliminated);
    setLearning(techEliminated);
    setInfo();
  };

  const handleDominated = (technology, createdBy, img, id) => {
    const dominated = conexionLocalStorage("dominated");

    const techToDominated = {
      technology,
      createdBy,
      img,
      id,
    };

    if (dominated) {
      const newDominatedArray = [...dominated, techToDominated];
      conexionLocalStorage("dominated", newDominatedArray);
    } else {
      conexionLocalStorage("dominated", [techToDominated]);
    }
    handleDelete(id);
  };

  return (
    <div className="w-11/12 bg-zinc-700 shadow-md rounded-xl flex items-center flex-col">
      <h2 className=" bg-purple-600 text-white text-4xl px-5 py-2 rounded-full font-bold mt-5">
        Learning
      </h2>
      <div className=" w-full flex flex-wrap items-center justify-evenly mt-5 overflow-auto">
        {learning.length > 0 ? (
          learning.map((tech) => (
            <Technology
              technology={tech.technology}
              createdBy={tech.createdBy}
              img={tech.img}
              id={tech.id}
              btn1={{
                content: "Dominated",
                theme: "btn-primary",
                onClick: () =>
                  handleDominated(
                    tech.technology,
                    tech.createdBy,
                    tech.img,
                    tech.id
                  ),
              }}
              btn2={{
                content: "Delete",
                theme: "btn-alternative",
                onClick: () => handleDelete(tech.id),
              }}
            />
          ))
        ) : (
          <h3 className=" text-2xl font-bold mb-5 text-white">
            You are not learning any technology
          </h3>
        )}
      </div>
    </div>
  );
};

export default BoxLearning;
