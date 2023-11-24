import { Link, useNavigate } from "react-router-dom";
import {FiShoppingBag,FiShoppingCart} from "react-icons/fi"
import {BsPencil} from "react-icons/bs"
import * as cookie from '../util/cookie.js'
import {getUser, removeUser} from '../util/localStorage.js'
// {}로 묶었다는 것은 바로 실행했다는 것과 마찬가지
export default function Navbar(){
  const auth = cookie.getCookie('x-auth-jwt');
  const navigate = useNavigate();
  console.log(auth);
  console.log(getUser());
  // const userId = getUser().id;
  const userInfo = getUser();
  function handleLogout(){
    removeUser();
    alert('로그아웃 되었습니다.')
    navigate('/')

  }
  return(
    <header>
      <nav className="nav_header">
        <div>
          <Link to='/' className='home'>
            <FiShoppingBag className="home_logo"/>
            <h1 className="home_text">Shoppy</h1>
          </Link>
          
        </div>
        <div>
          {userInfo ?
          (            
          <>
            <span>'{userInfo.id}' 님 반갑습니다</span>
            <Link to='/Products' className='menu'>Products</Link>
            <Link to='/cart' className='menu'>
              <FiShoppingCart/>
            </Link>
            <Link to='/order' className='menu'>주문하기</Link>
            <Link to='/products/regist' className='menu'>
              <BsPencil/>
            </Link>
            <button type="button" onClick={handleLogout} className="menu">LogOut</button>
          </>
          )
            :
          (            
          <>
            <Link to='/Products' className='menu'>Products</Link>
            <Link to='/cart' className='menu'>
              <FiShoppingCart/>
            </Link>
            <Link to='/products/regist' className='menu'>
              <BsPencil/>
            </Link>
            <Link to='/login' className="menu"><button type="button">Login</button></Link>
          </>
          )
            }
        </div>
      </nav>
    </header>
  );
}