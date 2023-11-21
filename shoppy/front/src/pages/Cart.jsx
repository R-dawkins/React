import { useEffect, useState } from 'react';
import * as cookie from '../util/cookie.js'
import {getUser} from '../util/localStorage.js'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
//서버에 회원의 장바구니 리스트 가져오기
//http://127.0.0.1:8000/carts/hong --> http://127.0.0.1:8000/carts/:id
//select로 quantity 조절 기능 추가 put요청 => SQL update 이용
//장바구니 물품 삭제 기능 추가 delete요청 => SQL delete 이용
export default function Carts(){
const navigate = useNavigate();
const userInfo = getUser();
const [cartlist,setCartList] = useState([]);
useEffect(()=>{
  if(userInfo){
    axios.get(`http://127.0.0.1:8000/carts/${userInfo.id}`)
    .then(result=>setCartList(result.data))
  }
  else{
    // navigate("..",{relative:"path"})
    let confirm = true;
    confirm = window.confirm('로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?')
    if(confirm){
      navigate('/login')
    }else{
      navigate('/')
    }
  }
},[])

const handleRemove = (cid)=>{
  axios.delete(`http://127.0.0.1:8000/carts/remove/${cid}`)
  .then(result => {
    if(result.status === 204){
      // 컴포넌트만 리렌더링 하고싶으나 더 공부하고 다음에 해보기 (setState활용)
      window.location.reload();
    }
  })
}
  return(
    <div className='cart inner'>{
      userInfo 
      ? (
      <div>
        <h1>{userInfo.id}의 장바구니</h1>
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>번호 </th>
                <th>상품 이름</th>
                <th>상품 가격</th>
                <th>상품 수량</th>
                <th>상품 총 가격</th>
                <th>비고</th>
              </tr>
            </thead>
            <tbody>
          {
            cartlist.map((list)=>{
                
              return <tr key={list.rno}>
                    <td>{list.cid}</td>
                    <td>{list.name}</td>
                    <td>{list.price}</td>
                    <td>{list.qty}</td>
                    <td>{list.lprice}</td>
                    <td>
                      <select name="qty" id="qty" defaultValue='1'>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <Button variant='danger' onClick={()=>handleRemove(list.cid)}>삭제</Button>
                    </td>
                  </tr>
            })
          }
            </tbody>
          </Table>
        </div>
      </div>) 
      : (<div>로그인이 필요합니다.</div>)
      }</div>
  );
}