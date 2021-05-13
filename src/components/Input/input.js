import React from "react";
import "./input.css";

export const Input = (props) => {
  return (
    <div>
      <input type={props.type} placeholder={props.text} />
    </div>
  );
};

export default Input;
