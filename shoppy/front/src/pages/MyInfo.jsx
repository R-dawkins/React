import React, { useReducer, useState } from 'react';
import infoReducer from '../reducer/infoReducer';
const initialState = { Lname: 'Taylor', Lage: 42 };
export default function MyInfo() {
  const [state, dispatch] = useReducer(infoReducer,initialState);
  const [name, setName] = useState('Taylor')
  const [age, setAge] = useState('42')

  return (
    <>
      <p>
        <input placeholder='이름' type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input placeholder='나이' type="text" value={age} onChange={(e)=>setAge(e.target.value)}/>
        <br/>
        <button type='button' onClick={()=>dispatch({type:'increment',nextname:name,nextage:age})}>정보 변경</button>
        <br/>
        Hello! {state.Lname} You are {state.Lage}
      </p>
    </>
  );
}