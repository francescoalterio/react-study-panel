import React, { useState, useEffect } from "react";
import Technology from "../components/Technology";
import { conexionLocalStorage } from "../utils/conexionLocalStorage";

const Dominated = () => {
  const [dominated, setDominated] = useState([]);

  useEffect(() => {
    const dominatedLocal = conexionLocalStorage("dominated");
    dominatedLocal && setDominated(dominatedLocal);
  }, []);

  const handleDelete = (id) => {
    const newDominated = dominated.filter((item) => item.id !== id);
    setDominated(newDominated);
    conexionLocalStorage("dominated", newDominated);
  };

  return (
    <div className="w-full h-screen pb-20">
      <div className="w-full h-screen flex flex-wrap justify-evenly pt-10 pb-20 lg:pb-0s overflow-auto">
        {dominated.map(({ technology, createdBy, img, id }) => (
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
