import React from "react";
import { firstLetterInUppercase } from "../utils/firstLetterInUppercase";

const LearningOrDominated = ({ content }) => {
  const status = firstLetterInUppercase(content);
  return (
    <div className="h-9 px-4 text-white font-semibold bg-gradient-to-r from-gray-500 to-gray-600 rounded-md mx-2 flex items-center">
      {status}
    </div>
  );
};

export default LearningOrDominated;
