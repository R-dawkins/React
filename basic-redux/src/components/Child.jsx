import React from 'react';
import Child2 from './Child2';
import { useSelector } from 'react-redux';
import { getPersonData } from '../modules/reduxReselector';

export default function Child() {
  const state = useSelector(getPersonData);
  return (
    <>
      <h1>
        [Child]name : {state.name}
        <br />
        [Child]age : {state.age}
        <br />
        [Child]addr : {state.addr}
      </h1>
      <Child2
      state={state}
      />
    </>
  );
}

