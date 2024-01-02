import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Child from './components/Child';
import { getPersonData } from './modules/reduxReselector';

function App() {
  //useSelector를 이용하여 store에 저장된 reducer 함수의 state 값 가져오기
  const state = useSelector(getPersonData);
  // const state = useSelector((state) => state);
  //렌더링 마다 store에 들리는 것 방지
  // const state = useSelector(메모해놓은 함수 호출);
  
  const dispatch = useDispatch();
  return (
    <>
      <h1>
        name : {state.name}
        <br />
        age : {state.age}
        <br />
        nickname : {state.nickname}
      </h1>
      <Child
      state={state}
      />
      <button onClick={()=>dispatch({type:'plus'})}>더하기</button>
      <button onClick={()=>dispatch({type:'reset'})}>리셋</button>
      <button onClick={()=>dispatch({type:'minus'})}>빼기</button>
    </>
  );
}

export default App;
