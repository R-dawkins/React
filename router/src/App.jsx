import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Video from './pages/Video';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Root from './pages/Root';
import VideoDetail from './pages/VideoDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>, //root path 밑에 주면 모든 존재하지 않는 하위주소에 적용되니 root path에 errorElement를 주는게 좋다
    children:[
      {path:"video", element: <Video></Video>},
      {path:"/video/:videoId", element:<VideoDetail/>},
      {index:"/", element: <Home></Home>},
  ]
  }
  ,
  // Outlet을 사용하면 Outlet 컴포넌트 위치에 children에 속해있는 컴포넌트가 페이지가 이동되지 않고 호출된다.
  // {
  //   path: "/video",
  //   element: <Video></Video>
  // }
])
// <Link to='/'>Home</Link> (html의 a태그와 같은 역할) a태그도 되지만 html의 a태그에서 react의 Link로 변환되는 과정에서 오류 발생 가능성이 많다
// RouterProvider에 router 넘기기
// react의 router는 싱글 페이지(SPA)방식이니 맨처음 출력되는 싱글페이지 필요
// http://localhost:port/ 
// outlet 출력하고자하는 내비게이션 
// 
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
