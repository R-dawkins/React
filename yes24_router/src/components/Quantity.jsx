import { useState } from "react";

export default function Quantity(){
  const [state,setState] = useState(1);
  function minusCount(){
    if(state<=1){
      alert('1개 이상 구매 가능합니다.')
    }
    else{
      setState(state-1)
    }
  }
  return(
    <div className="buy_count">
      <input className="quantity_input" type="checkbox" name="buy_checkbox" id="buy_checkbox" />
      <button className="quantity_item" onClick={minusCount}>-</button>
      <span className="quantity_span">{state}</span>
      <button className="quantity_item" onClick={()=>setState(state+1)}>+</button>
    </div>
  );
}