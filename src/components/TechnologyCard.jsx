import React from "react";
import Button from "./Button";
import LearningOrDominated from "./LearningOrDominated";

export const TechnologyCard = ({
  technology,
  createdBy,
  img,
  id,
  btn1,
  btn2,
  status,
}) => {
  return (
    <div className=" w-64 h-80 bg-[#111317] rounded-md flex flex-col justify-evenly items-center  mb-10 mx-2 text-white">
      <img src={img} alt="" className=" w-32 h-32" />
      <div className=" w-full flex flex-col justify-center items-center">
        <h3 className=" font-bold text-2xl text-center">{technology}</h3>
        <h5 className={createdBy === "Core" ? "core" : "added"}>{createdBy}</h5>
      </div>
      <div className=" w-full flex flex-col justify-center items-center">
        <div className=" w-full flex justify-center items-center">
          {status === "learning" || status === "dominated" ? (
            <LearningOrDominated content={status} />
          ) : (
            <>
              <Button
                content={btn1.content}
                styles={btn1.theme}
                onClick={btn1.onClick}
              />
              {status !== "dominated-page" && (
                <Button
                  content={btn2.content}
                  styles={btn2.theme}
                  onClick={btn2.onClick}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
