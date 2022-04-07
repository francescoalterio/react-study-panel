import React, { useContext } from "react";
import Technology from "../components/Technology";
import { UserContext } from "../context/UserContext";
import { getDocument } from "../utils/getDocument";
import { setDataUser } from "../utils/setDataUser";

const Dominated = () => {
  const [user, handleUser] = useContext(UserContext);

  const handleDelete = (id) => {
    const newDominated = user.dominated.filter((item) => item.id !== id);
    setDataUser(user.email, {
      learning: user.learning,
      dominated: newDominated,
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
    <div className="w-full h-screen pb-20">
      <div className="w-full h-screen flex flex-wrap justify-evenly pt-10 pb-20 lg:pb-0s overflow-auto">
        {user.dominated.map(({ technology, createdBy, img, id }) => (
          <Technology
            technology={technology}
            createdBy={createdBy}
            img={img}
            id={id}
            btn1={{
              content: "Delete",
              theme: "btn-alternative",
              onClick: () => handleDelete(id),
            }}
            status="dominated-page"
          />
        ))}
      </div>
    </div>
  );
};

export default Dominated;
