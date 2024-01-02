import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, legacy_createStore as createStore} from 'redux'; //store 생성 라이브러리
import { Provider } from 'react-redux';
import reducer from './modules/reducer';
import { rootReducer } from './modules/rootReducer';
import logger from 'redux-logger';
//0. 공유 데이터 정의
// const rinfo = {name:'고길동',age:20,addr:'서울'}; // state에 직접 넣어도 되긴 함
//1. 스토어 호출 함수
/* 
function reducer(현재상태, 컴포넌트액션처리변수){
} 
*/

/* function reducer(state=rinfo, action){ // 스토어 호출 함수
  switch (action.type) {
    case 'plus':
      return {
        name : state.name,
        age: state.age +1,
        addr: state.addr
      };
    case 'reset':
      return{
        name : state.name,
        age: 20,
        addr: state.addr
      }
    case 'minus':
      return{
        name : state.name,
        age: state.age - 1,
        addr: state.addr
      }
    default:
      return state;
  }
} */

//2. 스토어 생성 및 리듀서 정의
// const store = createStore(스토어 호출 함수);
const store = createStore(rootReducer,applyMiddleware(logger));
console.log(store.getState());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* 스토어 사용범위 지정 */}
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
