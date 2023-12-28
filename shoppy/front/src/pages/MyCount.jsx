import React, { useReducer, useState } from 'react';
import countReducer from '../reducer/countReducer';

export default function MyCount() {
const [number, setNumber] = useState(0);
const [count,dispatch] = useReducer(countReducer, 0);
  return (
    <div>
      <h1>count : {count}</h1>
      <p>
        <button type='button' onClick={()=>dispatch({type:'increment',number:number})}>더하기</button>
        <button type='button' onClick={()=>dispatch({type: 'reset'})}>초기화</button>
        <button type='button' onClick={()=>dispatch({type: 'decrement',number:number})}>빼기</button>
        <br />
        증가치 : <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))}/>
      </p>
    </div>
  );
}

