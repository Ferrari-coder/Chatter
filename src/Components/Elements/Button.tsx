import React from "react";
import { Buttons } from "../../utilis/interfaces/interfaces";

const Button: React.FC<Buttons> = ({ text, textTransform }) => {
  return (
    <button className="py-4 px-12 text-white bg-regal-blue rounded-lg" style={{ textTransform: textTransform || "capitalize" }}>
      {" "}
      {text}
    </button>
  );
};

export default Button;
