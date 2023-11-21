import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import ProductsAll from './pages/ProductsAll';
import ProductsContents from './pages/ProductsContents';
import ProductsRegist from './pages/ProductsRegist';
import Cart from './pages/Cart';
import Root from './pages/Root';
import NotFound from './pages/NotFound';
import Login from './pages/member/Login';
import SignUp from './pages/member/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const router = createBrowserRouter([
  {
    path : '/',
    element : <Root />,
    errorElement : <NotFound/>,
    children : [
      { index : true, path : '/', element : <Home/>},
      { path : '/Products', element : <ProductsAll/>},
      { path : '/products/:id', element : <ProductsContents/>},
      { path : '/products/regist', element : <ProductsRegist/>},
      { path : '/cart', element : <Cart/>},
      { path : '/login', element : <Login/>},
      { path : '/signup', element : <SignUp/>}
    ]
  }
]);

/* 

/ --> Home
/products --> ProductsAll
/products/:id --> ProductsContents
/products/new --> ProductsRegist
/carts --> Carts
/login --> Login
/signup --> SignUp


*/

function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
