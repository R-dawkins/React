import React, { useState } from "react";

export default function Counter () {

  const [count,setCount] = useState(0);

  function increse(){
    setCount(count=>count+1);
  }
  return(
    <>
      <span className="number">{count}</span>
      <button type="button" onClick={()=>{increse();increse();increse();}}>Add+1</button>
      <button type="button" onClick={increse}>Add+3</button>
    </>
  );
}