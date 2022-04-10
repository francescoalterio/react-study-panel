import { getFirestore } from "../utils/getFirestore";
import React, { useEffect, useState, useContext } from "react";
import SearchBar from "../components/SearchBar";
import Technology from "../components/Technology";
import { UserContext } from "../context/UserContext";
import { setDataUser } from "../utils/setDataUser";
import { getDocument } from "../utils/getDocument";
import { useNavigate } from "react-router-dom";

const Technologies = () => {
  const [searchInput, setSearchInput] = useState("");
  const [technologies, setTechnologies] = useState([]);

  const [user, handleUser] = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    getFirestore("Core").then((result) => {
      setTechnologies([...result, ...user.created]);
    });
  }, [user]);

  const handleLearn = (technology, createdBy, img, id) => {
    if (!user.email) {
      navigate("/login");
    } else {
      const techToLearn = {
        technology,
        createdBy,
        img,
        id,
      };
      const newLearningArray = [...user.learning, techToLearn];
      setDataUser(user.email, {
        learning: newLearningArray,
        dominated: user.dominated,
        created: user.created,
      });
      getDocument("users", user.email).then((data) => {
        handleUser({
          email: user.email,
          learning: data.learning,
          dominated: data.dominated,
          created: data.created,
        });
      });
    }
  };

  const handleDominated = (technology, createdBy, img, id) => {
    if (!user.email) {
      navigate("/login");
    } else {
      const techToDominated = {
        technology,
        createdBy,
        img,
        id,
      };

      const newDominatedArray = [...user.dominated, techToDominated];

      setDataUser(user.email, {
        learning: user.learning,
        dominated: newDominatedArray,
        created: user.created,
      });
      getDocument("users", user.email).then((data) => {
        handleUser({
          email: user.email,
          learning: data.learning,
          dominated: data.dominated,
          created: data.created,
        });
      });
    }
  };

  return (
    <div className="w-full h-screen ">
      <SearchBar value={searchInput} setValue={setSearchInput} />
      <div className="w-full h-screen flex flex-wrap justify-evenly pt-10 pb-40 lg:pb-20 overflow-auto">
        {technologies
          .filter((tech) => {
            const lowerCaseTech = tech.technology.toLowerCase();
            const lowerCaseSearchInput = searchInput.toLowerCase();
            return lowerCaseTech.includes(lowerCaseSearchInput);
          })
          .map(({ technology, createdBy, img, id }) => (
            <Technology
              key={id}
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
                content: "Learn",
                theme: "btn-secondary",
                onClick: () => handleLearn(technology, createdBy, img, id),
              }}
              status={
                user.learning.find((tech) => tech.id === id)
                  ? "learning"
                  : user.dominated.find((tech) => tech.id === id)
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
