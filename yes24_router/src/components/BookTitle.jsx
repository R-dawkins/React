import { useState } from "react";

export default function BookTitle({Ftitle,Stitle,color,toggle}){
  const [state,setState] = useState(Stitle);
  return(
    <div>
      <h1><span className={color}>{Ftitle}</span> {state}</h1>
      {toggle && <span><button onClick={(e)=>setState('월별 베스트')}>월별</button> <button onClick={(e)=>setState('주별 베스트')}>주별</button></span>}
    </div>
  );
}