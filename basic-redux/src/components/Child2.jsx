import React from 'react';
import { useSelector } from 'react-redux';
import { getPersonData, getPersonName } from '../modules/reduxReselector';
import Child3 from './Child3';

export default function Child2() {
  const state = useSelector(getPersonName);
  return (
    <>
      <h1>
        [Child2]name : {state.name}
        <br />
        [Child2]age : {state.age}
      </h1>
      <Child3/>
    </>
  );
}

