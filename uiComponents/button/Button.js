import React from "react";

const Button = (props) => {
  const { red, light, lg, md, sm, children, className, onClick } = props;
  return (
    <>
      <button
        onClick={onClick}
        className={`styled-btn ${
          (red && "red") || (light && "light") || "default-clr"
        } ${(sm && "sm") || (md && "md") || "lg"} ${
          className ? className : ""
        }`}>
        {children}
      </button>
    </>
  );
};

export default Button;
