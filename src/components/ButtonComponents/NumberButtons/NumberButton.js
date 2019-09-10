import React, {useState} from "react";
import Numbers from "./Numbers";

const NumberButton = (props) => {

  return (
    <>
    <button className="numberButtons">
      {props.numbers}
      </button>
    </>
  );
};

export default NumberButton