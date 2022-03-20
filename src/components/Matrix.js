import React, { useState } from "react";
import "./design.css";

const Matrix = () => {
  const [box, setBox] = useState(1);
  const [stack, setStack] = useState([]);

  //[e1]
  //[e2,e1]
  //[e3,e2]
  //[e4,e3]

  const btnClick = (e) => {
    e.target.innerText = `Box ${box}`;
    e.target.classList.add("redColor");
    console.log(stack);
    if (stack.length === 2) {
      console.log("Element is 2 now");
      const tempEvent = stack.pop();
      tempEvent.target.classList.remove("redColor");
    }
    setStack([e, ...stack]);
    setBox(box + 1);
  };

  return (
    <div>
      <table>
        <tr>
          <td onClick={btnClick}></td>
          <td onClick={btnClick}></td>
          <td onClick={btnClick}></td>
          <td onClick={btnClick}></td>
        </tr>
        <tr>
          <td onClick={btnClick}></td>
          <td onClick={btnClick}></td>
          <td onClick={btnClick}></td>
          <td onClick={btnClick}></td>
        </tr>
        <tr>
          <td onClick={btnClick}></td>
          <td onClick={btnClick}></td>
          <td onClick={btnClick}></td>
          <td onClick={btnClick}></td>
        </tr>
        <tr>
          <td onClick={btnClick}></td>
          <td onClick={btnClick}></td>
          <td onClick={btnClick}></td>
          <td onClick={btnClick}></td>
        </tr>
      </table>
    </div>
  );
};

export default Matrix;
