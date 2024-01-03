import { useEffect, useState } from 'react';
import * as cookie from '../util/cookie.js'
import {getUser} from '../util/localStorage.js'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Quantity from '../components/Quantity.jsx';
import Form from 'react-bootstrap/Form'
import Pagination from 'rc-pagination';
import 'bootstrap/dist/css/bootstrap.css';
import 'rc-pagination/assets/index.css'
import useCart from '../hooks/useCart.js';
import CartItem from '../components/CartItem.jsx';
import useOrder from '../hooks/useOrder.js';
import { useDispatch, useSelector } from 'react-redux';
import { cartListFetchData } from '../api/cartsAPI.js';
import { getCartListData } from '../modules_redux/reduxSelector.js';

export default function Carts(){
const navigate = useNavigate();
const userInfo = getUser();
const [curPage, setCurPage] = useState(1); 
const [sumPrice,setSumPrice] = useState(0);
const [total,setTotal] = useState(0);
const dispatch = useDispatch();
/* const handlePay =()=>{
  axios.post(`http://127.0.0.1:8000/order/new`,cartlist)
  .then(result => {
    
    if(result.status === 204){
      handleCartRemove()
    }
  })
  
} */

// const [cartlist,sumPrice,total,pageSize,totItem,setSumPrice,setTotal] = useCart(curPage,userInfo)
/* const {handleOrder} = useOrder(cartlist) */
/* const handleCartRemove =async ()=>{
  await axios.delete(`http://127.0.0.1:8000/carts/removelist/${userInfo.id}`)
  .then(result => {
    if(result.status === 200){
      alert('결제 화면으로 이동')
      navigate('/order')
    }
  })
} */

//1. dispatch => API :: Axios 액션 함수 -> src/api/cartsAPI.js
useEffect(()=>{
  dispatch(cartListFetchData({userInfo,curPage}));
},[curPage])
//2. useSelector
const {cartList, totalCount, totalPrice, pageSize} = useSelector(getCartListData);
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
                <th>번호</th>
                <th>상품 사진 </th>
                <th>상품 이름</th>
                <th>상품 사이즈</th>
                <th>상품 가격</th>
                <th>상품 수량 변경</th>
                <th>상품 총 가격</th>
                <th>상품 삭제</th>
              </tr>
            </thead>
            <tbody>
          {
            cartList && cartList.map((list)=>{
                
              return <CartItem
              key={list.rno}
              list={list}
              setSumPrice={setSumPrice}
              setTotal={setTotal}
              sumPrice={sumPrice}
              />
            })
          }
            </tbody>
          </Table>
            <Pagination className='d-flex justify-content-center'
            onChange={(page)=>{setCurPage(page)}}
            current={curPage}// 현재 페이지
            total={totalCount}// 총 아이템 개수
            pageSize={pageSize}//한페이지에 보여줄 개수
            />
          <div className='total_price'>
            <p>총 상품가격 : {parseInt(totalPrice).toLocaleString()}원</p>
            <p>+ 총 배송비 : </p>
            <p>= 총 주문금액 : {parseInt(totalPrice).toLocaleString()}원</p>
            <Button>주문</Button>
          </div>
        </div>
      </div>) 
      : (<div>로그인이 필요합니다.</div>)
      }</div>
  );
}
/* 
  주문하기 버튼 추가 [완료]
  오더(주문) 테이블에 장바구니 데이터 추가 후 장바구니 삭제 [완료]
  체크박스 추가해서 여러개 선택하여 삭제 기능 추가
  전체 선택 삭제 추가
  사이즈 셀렉트박스로 변경 기능 추가
*/