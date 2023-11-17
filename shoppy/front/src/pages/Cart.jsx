import * as cookie from '../util/cookie.js'
import {getUser} from '../util/localStorage.js'

export default function Carts(){
const userInfo = getUser();
  return(
    <div className='cart inner'>{userInfo ? (<div>{userInfo.id}의 장바구니</div>) : (<div>권한이 없습니다.</div>)}</div>
  );
}