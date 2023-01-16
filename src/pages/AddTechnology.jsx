import React, { useContext, useState } from "react";
import Technology from "../components/Technology";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { getDocument } from "../utils/getDocument";
import { setDataUser } from "../utils/setDataUser";

const AddTechnology = () => {
  const [technology, setTechnology] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [img, setImg] = useState("");

  const [user, handleUser] = useContext(UserContext);

  console.log(technology, createdBy, img);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCreated = {
      technology,
      createdBy,
      img,
      id: Date.now(),
    };

    const newCreatedForUser = [...user.created, newCreated];

    setDataUser(user.email, {
      learning: user.learning,
      dominated: user.dominated,
      created: newCreatedForUser,
    });
    getDocument("users", user.email).then((data) => {
      handleUser({
        email: user.email,
        learning: data.learning,
        dominated: data.dominated,
        created: data.created,
      });
    });

    navigate("/technologies");
  };

  const cancel = () => {
    navigate("/technologies");
  };

  return (
    <div className=" w-full h-screen flex flex-col pt-5 lg:pt-0 lg:flex-row lg:justify-evenly lg:items-center items-center bg-zinc-100 dark:bg-zinc-900 lg:pb-0 overflow-y-auto">
      <form
        onSubmit={handleSubmit}
        className=" w-80 lg:w-96 lg:h-96 rounded-2xl flex flex-col justify-start lg:justify-evenly items-center shadow-2xl bg-white dark:bg-zinc-800 mb-5 lg:mb-10 py-2"
      >
        <input
          type="text"
          placeholder="Technology"
          value={technology}
          onChange={(e) => setTechnology(e.target.value)}
          className="inputAdd"
        />
        <input
          type="text"
          placeholder="Created by"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
          className="inputAdd"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="inputAdd"
        />
        <div>
          <Button content="Add Technology" theme="btn-secondary" />
          <Button onClick={cancel} content="Cancel" theme="btn-alternative" />
        </div>
      </form>
      <Technology
        technology={technology}
        createdBy={createdBy}
        img={img}
        btn1={{
          content: "Dominated",
          theme: "btn-primary",
          onClick: () => undefined,
        }}
        btn2={{
          content: "Learn",
          theme: "btn-secondary",
          onClick: () => undefined,
        }}
      />
    </div>
  );
};

export default AddTechnology;
