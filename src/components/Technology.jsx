import React from "react";
import Button from "./Button";
import LearningOrDominated from "./LearningOrDominated";

const Technology = ({ technology, createdBy, img, id, btn1, btn2, status }) => {
  return (
    <div className=" w-80 h-96 bg-zinc-800 rounded-2xl flex flex-col justify-evenly items-center shadow-purple-600 shadow-md border-solid border-purple-700 border-4 mb-10 mx-2 text-white">
      <img src={img} alt="" className="w-40 h-40" />
      <div className=" w-full flex flex-col justify-center items-center">
        <h3 className=" font-bold text-4xl text-center">{technology}</h3>
        <h5 className={createdBy === "Core" ? "core" : "added"}>{createdBy}</h5>
      </div>
      <div className=" w-full flex flex-col justify-center items-center">
        <div className=" w-full flex justify-center items-center">
          {status === "learning" ? (
            <LearningOrDominated content="Learning" />
          ) : status === "dominated" ? (
            <LearningOrDominated content="Dominated" />
          ) : status === "dominated-page" ? (
            <Button
              content={btn1.content}
              theme={btn1.theme}
              onClick={btn1.onClick}
            />
          ) : (
            <>
              <Button
                content={btn1.content}
                theme={btn1.theme}
                onClick={btn1.onClick}
              />
              <Button
                content={btn2.content}
                theme={btn2.theme}
                onClick={btn2.onClick}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Technology;
