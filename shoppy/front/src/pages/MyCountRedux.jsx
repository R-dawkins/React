import React from 'react';
import CountItemRedux from '../components/CountItemRedux';
import CountContainer from '../containers_redux/CountContainer';

export default function MyCountRedux() {
  return (
    <div>
      <h1>Redux</h1>
      <CountContainer/>
      <hr />
      <CountContainer/>
      <hr />
      <CountContainer/>
    </div>
  );
}

