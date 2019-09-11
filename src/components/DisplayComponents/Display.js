import React, { useState } from "react";
import Numbers from "../ButtonComponents/NumberButtons/Numbers";
import Operators from "../ButtonComponents/OperatorButtons/Operators";
import Specials from "../ButtonComponents/SpecialButtons/Specials"



const Display = () => {

  const [calculate, updateCalculate] = useState(0)

  return <div className="display">{calculate}</div>;
};

export default Display;