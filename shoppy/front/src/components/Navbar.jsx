import { Link } from "react-router-dom";
import {FiShoppingBag,FiShoppingCart} from "react-icons/fi"
import {BsPencil} from "react-icons/bs"
export default function Navbar(){
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
          <Link to='/Products' className='menu'>Products</Link>
          <Link to='/cart' className='menu'>
            <FiShoppingCart/>
          </Link>
          <Link to='/products/regist' className='menu'>
            <BsPencil/>
            </Link>
          <Link to='/login' className="menu">Login</Link>
        </div>
      </nav>
    </header>
  );
}