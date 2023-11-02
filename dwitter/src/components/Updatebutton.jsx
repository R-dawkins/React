import { useState } from "react";


export default function Updatebutton(props){
  const [state,setState] = useState(true);
  const onClick =()=>{ //onClick 이벤트가 일어났을 때 할 함수
    props.onUpdate(state) //부모에게서 받은 함수의 인수로 state값 넘김
  }
  return(
  <button className="button" onClick={()=>{setState(!state); onClick();}}>{props.title}</button>
  );
}