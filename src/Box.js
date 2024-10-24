import { useState } from "react";
import "./Box.css";

function Box() {

    const plus ='+'
    const sub = '-'

  const [num, SetNum] = useState(0);
  const incnum = num+1;
  const decnum = num-1;

  //

  function incHandler() {
    SetNum(incnum);
    console.log("button clicked")
  }

  function decHandler() {
    SetNum(decnum);
    console.log("button clicked")
  }


  //for change

//   const [newNum, setNum] = useState("");

//   function ChangeHandler(event){
//     setNum(event.target.value);
//     console.log(event.target.value)
//   }

  return (
    <div className="box">
      <button  onClick={incHandler} className="btn" >{plus}</button>
      <p className="number">{num}</p>
      <button   onClick={decHandler} className="btn">{sub}</button>
    </div>
  );
}

export default Box;
