import React from "react";

export const index = () => {
  function addImage() {
    if (index.value === 0) {
      console.log("aee");
    } else {
      <h1>AAAA</h1>;
    }
  }

  return (
    <div>
      <input type="number" value="" />
      <button type="submit" onClick={addImage}>
        Click
      </button>
    </div>
  );
};

export default index;
