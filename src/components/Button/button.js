import React from "react";
import "./button.css";

export const Button = (props) => {
  // const [text, setText] = useState("login");
  function test(e) {
    console.log("foi");

    e.target.setAttribute(props.name, "two");
  }

  return (
    <div>
      <button className="one" onClick={test}>
        {props.name}
      </button>
    </div>
  );
};

export default Button;
