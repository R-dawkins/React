import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getInputName } from '../modules/reduxReselector';

export default function Child3() {
  const dispatch = useDispatch();
  const state = useSelector(getInputName);
  function handleClick(){
    
  }
  return (
    <>
      <h1>
        [child3]name : {state.inputName}
      </h1>
      <input type="text" onChange={(e)=>{dispatch({type:'change', inputName:e.target.value})}}/>
    </>
  );
}

