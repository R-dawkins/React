import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {CookiesProvider} from 'react-cookie'
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './modules_redux/rootReducer';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger'
import {thunk} from 'redux-thunk' //비동기처리 라이브러리
import {configureStore} from '@reduxjs/toolkit'
import reduxCartList from './modules_redux/reduxCartList';
import reduxQtyUpdate from './modules_redux/reduxQtyUpdate';
import reduxCartItemDelete from './modules_redux/reduxCartItemDelete';
// import {createStore } from 'redux'; createStore는 deprecated 표시가 되어있지만 실제로는 문제없이 작동한다
/* const store = createStore(rootReducer,applyMiddleware(thunk));
console.log(store.getState()); */
const store = configureStore({
  //regacy에서는 combineReducer를 따로 사용했어야 하지만 redux toolkit에서는 configureStore의 내부에서 지원해주고 있다.
  reducer :{
    reduxCartList,
    reduxQtyUpdate,
    reduxCartItemDelete
  }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
