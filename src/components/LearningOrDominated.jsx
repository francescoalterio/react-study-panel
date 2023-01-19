import React from "react";
import { firstLetterInUppercase } from "../utils/firstLetterInUppercase";

const LearningOrDominated = ({ content }) => {
  const status = firstLetterInUppercase(content);
  return (
    <div className="h-9 px-4 text-white font-semibold bg-[#282C35] rounded-md mx-2 flex items-center">
      {status}
    </div>
  );
};

export default LearningOrDominated;
