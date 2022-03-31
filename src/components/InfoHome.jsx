import React, { useEffect, useState } from "react";
import DataBox from "../components/DataBox";

const InfoHome = ({ data }) => {
  return (
    <div className="sm:w-full h-32 sm:h-44 flex lg:flex-row justify-evenly items-center sm:bg-none bg-gradient-to-br from-purple-600 to-purple-800 w-11/12 rounded-xl my-5">
      <DataBox
        title="Learning"
        data={data && data.learning}
        theme="lg:w-64 h-28 sm:bg-gradient-to-br sm:from-blue-400 sm:to-blue-700 rounded-2xl rounded-br-2xl flex flex-col justify-evenly items-center md:w-56 sm:w-44 bg-none"
      />
      <DataBox
        title="Dominated"
        data={data && data.dominated}
        theme="lg:w-64 h-28 sm:bg-gradient-to-br sm:from-yellow-400 sm:to-yellow-700 rounded-2xl rounded-br-2xl flex flex-col justify-evenly items-center md:w-56 sm:w-44 bg-none"
      />
      <DataBox
        title="Created"
        data={data && data.createdForUser}
        theme="lg:w-64 h-28 sm:bg-gradient-to-br sm:from-red-400 sm:to-red-700 rounded-2xl rounded-br-2xl flex flex-col justify-evenly items-center md:w-56 sm:w-44 bg-none"
      />
    </div>
  );
};

export default InfoHome;
