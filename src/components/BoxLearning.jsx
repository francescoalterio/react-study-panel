import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useTechnology } from "../hooks/useTechnology";
import { getDocument } from "../utils/getDocument";
import { setDataUser } from "../utils/setDataUser";
import { TechnologyCard } from "./TechnologyCard";

const BoxLearning = () => {
  const [user, handleUser] = useContext(UserContext);
  const { deleteHandler } = useTechnology();

  const masterTechnology = (technologyData) => {
    const techEliminated = user.learning.filter(
      (tech) => tech.id !== technologyData.id
    );

    const newDominatedArray = [...user.dominated, technologyData];
    setDataUser(user.email, {
      learning: techEliminated,
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
  };

  return (
    <div className="w-full bg-[#111317] shadow-md rounded-md flex items-center flex-col">
      <div className=" w-full">
        <h2 className=" text-white text-xl px-5 py-2 rounded-full mt-2">
          Technologies learning
        </h2>
      </div>
      <div className=" w-full flex flex-wrap items-center justify-evenly mt-5 overflow-auto">
        {user.learning.length > 0 ? (
          user.learning.map(({ id, technology, createdBy, img }) => (
            <TechnologyCard
              key={id}
              technology={technology}
              createdBy={createdBy}
              img={img}
              id={id}
              btn1={{
                content: "Dominated",
                theme: "btn-primary",
                onClick: () =>
                  masterTechnology({ technology, createdBy, img, id }),
              }}
              btn2={{
                content: "Delete",
                theme: "btn-alternative",
                onClick: () => deleteHandler("learning", id),
              }}
            />
          ))
        ) : !user.email ? (
          <div className="w-full flex flex-col justify-center items-center pb-5">
            <h3 className=" text-2xl text-center font-bold mb-5 text-white">
              You need to log in to use the panel
            </h3>
            <Link
              to="/login"
              className="btn-primary flex justify-center items-center text-lg"
            >
              Login
            </Link>
          </div>
        ) : (
          <h3 className=" text-2xl text-center font-bold mb-5 text-white">
            You are not learning any technology
          </h3>
        )}
      </div>
    </div>
  );
};

export default BoxLearning;
