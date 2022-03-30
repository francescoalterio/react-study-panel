import React from "react";

const Button = ({ content, theme, onClick }) => {
  return (
    <button onClick={onClick} className={theme}>
      {content}
    </button>
  );
};

export default Button;
