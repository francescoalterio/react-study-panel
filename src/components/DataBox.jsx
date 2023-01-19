import React from "react";

const DataBox = ({ title, data, icon }) => {
  return (
    <div className=" bg-[#111317] px-4 py-5 rounded-md flex flex-row flex-1 items-center min-w-[250px] md:min-w-[320px] lg:min-w-[150px]">
      <div className=" text-[#1FCB4F] mr-5 bg-[#282C35] p-3 rounded-md">
        {icon}
      </div>
      <div>
        <h3 className=" text-zinc-400 text-sm mb-2 ">{title}</h3>
        <h3 className=" text-white text-4xl">{data}</h3>
      </div>
    </div>
  );
};

export default DataBox;
