import { useEffect, useState } from "react";
import Updatebutton from "./Updatebutton";
import Updateform from "./Updateform";
import Removebutton from "./Removebutton";

export default function Dwitt(props){
  const [state,setState] = useState(false);
const handleUpdateButton = (Cstate) => setState(Cstate); // 자식에게서 받은 Cstate를 setState에게 넘겨줘서 state값 설정
console.log(state);
return(
  <ul>
      <li className="dwittprops" key={props.id}>
        <div className="img_div"><img src={props.image} alt="프로필" /></div>
        <div className="title">
          <span>[{props.name}]</span>
          <span>@{props.id}</span>
          <span>{props.date}</span>
          <p>{props.content}</p>
          {state && <Updateform/>}
        </div>
        <div>
          <Updatebutton
          title = '편집'
          onUpdate = {handleUpdateButton}
          />
          <Removebutton
          title = '삭제'
          
          />
        </div>
      </li>
  </ul>
  );
}