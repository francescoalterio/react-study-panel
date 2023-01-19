import React from "react";
import DataBox from "../components/DataBox";

import {
  IoBook,
  IoBriefcase,
  IoConstruct,
  IoFileTrayFull,
} from "react-icons/io5";

const InfoHome = ({ data }) => {
  return (
    <div className="w-full flex my-8 gap-6 overflow-hidden">
      <DataBox title="Learning" data={data.learning} icon={<IoBook />} />
      <DataBox title="Dominated" data={data.dominated} icon={<IoBriefcase />} />
      <DataBox
        title="Created"
        data={data.createdForUser}
        icon={<IoConstruct />}
      />
      <DataBox title="Tasks" data={0} icon={<IoFileTrayFull />} />
    </div>
  );
};

export default InfoHome;
