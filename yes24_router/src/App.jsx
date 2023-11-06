import './App.css';
import React from 'react';
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Root from './pages/Root';
import BestSeller from './pages/BestSeller';
import RealTimeBestSeller from './pages/RealTimeBestSeller';
import DayBestSeller from './pages/DayBestSeller';
import MonthWeekBestSeller from './pages/MonthWeekBestSeller';
import HotPriceBestSeller from './pages/HotPriceBestSeller';
import SteadySeller from './pages/SteadySeller';
//1. createBrowserRouter 생성
const router = createBrowserRouter([
  {path:'/',
  element:<Root/>,
  errorElement: <h1>404 Error Page Not Found</h1>,
  children:[
    {path:"/",element:<BestSeller/>},
    {path:"/BestSeller",element:<BestSeller/>},
    {path:"/realtime",element:<RealTimeBestSeller/>}, //주소와 컴포넌트의 이름을 매칭되지 않게 해서 보안성을 높인다.
    {path:"/day",element:<DayBestSeller/>},
    {path:"/monthweek",element:<MonthWeekBestSeller/>},
    {path:"/hotprice",element:<HotPriceBestSeller/>},
    {path:"/steady",element:<SteadySeller/>},
  ]}
])

// 컴포넌트와 url path는 이름이 다른것이 보안성에 좋다.

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;
