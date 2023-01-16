import React from "react";

const DataBox = ({ title, data, styles }) => {
  return (
    <div className={styles}>
      <h3 className="font-bold text-white text-xl sm:text-2xl">{title}</h3>
      <h3 className="font-bold text-white text-2xl sm:text-4xl">{data}</h3>
    </div>
  );
};

export default DataBox;
