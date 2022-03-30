import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Technology from "../components/Technology";
import { conexionLocalStorage } from "../utils/conexionLocalStorage";

const Technologies = () => {
  const [searchInput, setSearchInput] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [learning, setLearning] = useState([]);
  const [dominated, setDominated] = useState([]);

  useEffect(() => {
    const createdForUser = localStorage.getItem("createdForUser");

    if (createdForUser) {
      setTechnologies([
        ...conexionLocalStorage("core"),
        ...conexionLocalStorage("createdForUser"),
      ]);
    } else {
      setTechnologies(conexionLocalStorage("core"));
    }
  }, []);

  useEffect(() => {
    const learningTechnologies = conexionLocalStorage("learning");
    learningTechnologies && setLearning(learningTechnologies);
    const dominatedTechnologies = conexionLocalStorage("dominated");
    dominatedTechnologies && setDominated(dominatedTechnologies);
  }, []);

  const handleLearn = (technology, createdBy, img, id) => {
    const learningLocal = conexionLocalStorage("learning");

    const techToLearn = {
      technology,
      createdBy,
      img,
      id,
    };

    if (learningLocal) {
      const newLearningArray = [...learning, techToLearn];
      conexionLocalStorage("learning", newLearningArray);
    } else {
      conexionLocalStorage("learning", [techToLearn]);
    }

    setLearning([...learning, techToLearn]);
  };

  const handleDominated = (technology, createdBy, img, id) => {
    const dominatedLocal = conexionLocalStorage("dominated");

    const techToDominated = {
      technology,
      createdBy,
      img,
      id,
    };

    if (dominatedLocal) {
      const newDominatedArray = [...dominated, techToDominated];
      conexionLocalStorage("dominated", newDominatedArray);
    } else {
      conexionLocalStorage("dominated", [techToDominated]);
    }

    setDominated([...dominated, techToDominated]);
  };

  return (
    <div className="w-full h-screen ">
      <SearchBar value={searchInput} setValue={setSearchInput} />
      <div className="w-full h-screen flex flex-wrap justify-evenly pt-10 pb-20 overflow-auto">
        {technologies
          .filter((tech) => {
            const lowerCaseTech = tech.technology.toLowerCase();
            const lowerCaseSearchInput = searchInput.toLowerCase();
            return lowerCaseTech.includes(lowerCaseSearchInput);
          })
          .map(({ technology, createdBy, img, id }) => (
            <Technology
              technology={technology}
              createdBy={createdBy}
              img={img}
              id={id}
              btn1={{
                content: "Dominated",
                theme: "btn-primary",
                onClick: () => handleDominated(technology, createdBy, img, id),
              }}
              btn2={{
                content: "Learning",
                theme: "btn-secondary",
                onClick: () => handleLearn(technology, createdBy, img, id),
              }}
              status={
                learning.find((tech) => tech.id === id)
                  ? "learning"
                  : dominated.find((tech) => tech.id === id)
                  ? "dominated"
                  : ""
              }
            />
          ))}
      </div>
    </div>
  );
};

export default Technologies;
