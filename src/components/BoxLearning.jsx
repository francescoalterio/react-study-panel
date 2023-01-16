import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { getDocument } from "../utils/getDocument";
import { setDataUser } from "../utils/setDataUser";
import Technology from "./Technology";

const BoxLearning = ({ setData }) => {
  const [user, handleUser] = useContext(UserContext);

  const setInfo = () => {
    setData({
      learning: user.learning ? user.learning.length : 0,
      createdForUser: user.created ? user.created.length : 0,
      dominated: user.dominated ? user.dominated.length : 0,
    });
  };

  const handleDelete = (id) => {
    const techEliminated = user.learning.filter((tech) => tech.id !== id);
    setDataUser(user.email, {
      learning: techEliminated,
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
    setInfo();
  };

  const handleDominated = (technology, createdBy, img, id) => {
    const techToDominated = {
      technology,
      createdBy,
      img,
      id,
    };

    const techEliminated = user.learning.filter((tech) => tech.id !== id);

    const newDominatedArray = [...user.dominated, techToDominated];
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
      setInfo();
    });
  };

  return (
    <div className="w-11/12 bg-zinc-700 shadow-md rounded-xl flex items-center flex-col">
      <h2 className=" bg-purple-600 text-white text-4xl px-5 py-2 rounded-full font-bold mt-5">
        Learning {process.env.REACT_APP_ERWE}
      </h2>
      <div className=" w-full flex flex-wrap items-center justify-evenly mt-5 overflow-auto">
        {user.learning.length > 0 ? (
          user.learning.map((tech) => (
            <Technology
              key={tech.id}
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
