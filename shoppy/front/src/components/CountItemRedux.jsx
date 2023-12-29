import React, { useReducer, useState } from 'react';
import countReducer from '../reducer/countReducer';

export default function CountItemRedux({count,total,onIncrement,onDecrement,onReset}) {
const [number, setNumber] = useState(0);
console.log(count);
  return (
    <div>
      <h1>count : {count}</h1>
      <p>
        <button type='button' onClick={onIncrement}>더하기</button>
        <button type='button' onClick={onReset}>초기화</button>
        <button type='button' onClick={onDecrement}>빼기</button>
        <br />
        {/* 증가치 : <input type="number" value={number} onChange={(e)=>setNumber(parseInt(e.target.value))}/> */}
      </p>
      <p>
        total : {total}
      </p>
    </div>
  );
}

