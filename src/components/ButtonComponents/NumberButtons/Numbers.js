import React, {useState} from "react";
import { numbers } from "../../../data";
import NumberButton from "./NumberButton"
//Import your array data to from the provided data file

const Numbers = () => {
  // STEP 2 - add the imported data to state
  
  const  [numbers] = useState(numbers);
  return (
    <div>
      
       {/* data.map(numbers, index) => {
        <NumberButton key = { index } data = { numbers }/>
     } */}
    </div>
  
  );
  
};
export default Numbers; 