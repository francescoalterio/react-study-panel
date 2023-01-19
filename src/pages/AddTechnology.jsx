import { TechnologyCard } from "../components/TechnologyCard";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

import { useTextInput } from "../hooks/useTextInput";
import { useTechnology } from "../hooks/useTechnology";

const AddTechnology = () => {
  const [technology, changeTechnologyText] = useTextInput();
  const [createdBy, changeCreatedByText] = useTextInput();
  const [img, changeImgText] = useTextInput();

  const { addTechnologyHandler } = useTechnology();

  const navigate = useNavigate();

  const cancel = () => {
    navigate("/technologies");
  };

  return (
    <div className=" w-full h-screen flex flex-col pt-5 lg:pt-0 lg:flex-row lg:justify-evenly lg:items-center items-centerlg:pb-0 overflow-y-auto">
      <form
        onSubmit={(e) =>
          addTechnologyHandler(e, { technology, createdBy, img })
        }
        className=" w-80 lg:w-96 lg:h-96 rounded-2xl flex flex-col justify-start lg:justify-evenly items-center shadow-2xl bg-white dark:bg-[#111317] mb-5 lg:mb-10 py-2"
      >
        <input
          type="text"
          placeholder="Technology"
          value={technology}
          onChange={changeTechnologyText}
          className="inputAdd"
        />
        <input
          type="text"
          placeholder="Created by"
          value={createdBy}
          onChange={changeCreatedByText}
          className="inputAdd"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={img}
          onChange={changeImgText}
          className="inputAdd"
        />
        <div>
          <Button content="Add Technology" styles="btn-secondary" />
          <Button onClick={cancel} content="Cancel" styles="btn-alternative" />
        </div>
      </form>
      <TechnologyCard
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
