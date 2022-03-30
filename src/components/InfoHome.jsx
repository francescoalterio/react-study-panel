import React, { useEffect, useState } from "react";
import DataBox from "../components/DataBox";

const InfoHome = ({ data }) => {
  return (
    <div className="w-full h-44 flex justify-evenly items-center">
      <DataBox
        title="Learning"
        data={data && data.learning}
        theme="w-64 h-28 bg-gradient-to-br from-blue-400 to-blue-700 rounded-2xl rounded-br-2xl flex flex-col justify-evenly items-center"
      />
      <DataBox
        title="Dominated"
        data={data && data.dominated}
        theme="w-64 h-28 bg-gradient-to-br from-yellow-400 to-yellow-700 rounded-2xl rounded-br-2xl flex flex-col justify-evenly items-center"
      />
      <DataBox
        title="Created"
        data={data && data.createdForUser}
        theme="w-64 h-28 bg-gradient-to-br from-red-400 to-red-700 rounded-2xl rounded-br-2xl flex flex-col justify-evenly items-center"
      />
    </div>
  );
};

export default InfoHome;
