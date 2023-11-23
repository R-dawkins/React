import { useEffect, useState } from 'react';
import * as cookie from '../util/cookie.js'
import {getUser} from '../util/localStorage.js'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Quantity from '../components/Quantity.jsx';
import Form from 'react-bootstrap/Form'
//서버에 회원의 장바구니 리스트 가져오기
//http://127.0.0.1:8000/carts/hong --> http://127.0.0.1:8000/carts/:id
//select로 quantity 조절 기능 추가 put요청 => SQL update 이용하면 안될듯 onchange를 사용하면 가능할지도(대부분의 쇼핑몰들은 상품수량변경한다고 새로고침을 하지는 않는다.)
//장바구니 물품 삭제 기능 추가 delete요청 => SQL delete 이용
export default function Carts(){
const navigate = useNavigate();
const userInfo = getUser();
const [cartlist,setCartList] = useState([]);
const [qty, setQty] = useState(1) // 선생님 방법
const [sumPrice,setSumPrice] = useState(0);
const [total,setTotal] = useState(0);
const [totdel,setTotdel] = useState(0);
const [orderList, setOrderList] = useState([]);
const [checkList, setCheckList] = useState([]);
const [boolFlag, setBoolFlag] = useState(false);
const handleAllcheck = ((e)=>{
  if(e.target.checked){
  }else{
  }
})

const handleChange = ((e)=>{
  console.log(e.target.dataset.id);
  let cid = e.target.dataset.id
  console.log(e.target.checked);
  if(e.target.checked){
    setCheckList([...checkList,cid])
    console.log(checkList);
  }else{
    console.log('unchecked!');
    setCheckList(checkList.filter((item) => item !== cid))
    console.log(checkList);
  }
  //체크한 상품의 cid를 배열에 넣음
})

const getQty = (e) => {
  setQty(e.qty);
    if(e.checkFlag === 'plus' && e.qtyFlag){
        setSumPrice(sumPrice+parseInt(e.price));
        setTotal(sumPrice+parseInt(e.price));
        
        // const copyCart = cartlist.filter((el)=>{return el.cid === e.cid});
        // copyCart[0].qty = e.qty;
        // setOrderList(copyCart)
        // console.log(orderList);

    }else if(e.checkFlag === 'minus' && e.qtyFlag){
        setSumPrice(sumPrice-parseInt(e.price));
        setTotal(sumPrice-parseInt(e.price));
    }
    // 상품 수량이 1일때 minus 이벤트가 일어나면 가격이 줄어드는 문제, 그 역 포함 Quantity에서 이벤트를 막는 방법으로 해결
    // 다른 좋은 방법이 있는지 생각
    // qty나 size를 변경 할 때 장바구니 cid도 받아서 그 cid로 filter 해서 cartlist 값 변경 1번째 방법
    // DB변경해서 편하게 받아오는 방법 2번째 방법
  //e에 자식 컴포넌트에서 받은 count값이 들어가는 것이라고 추측 가능
  handleUpdate(e.cid,e.qty);
}


const handleUpdate = (cid,qty)=>{
  axios.put(`http://127.0.0.1:8000/carts/update/${cid}/${qty}`)
  .then(result => {
    console.log(result);
    if(result.status === 204){
    }
  })
  //대부분의 쇼핑몰들은 수량을 변경할때마다 테이블을 변경하지는 않는 것 같다. << XXX
  //바로 DB연동해서 테이블 업데이트 한다고 함
  //일단 새로고침은 일어나지 않으니 새로고침은 빼는게좋을듯
}//수량 update 기능



const handlePay =()=>{
  //회원id,pid,size,qty,totalPrice 받아오기
  axios.post(`http://127.0.0.1:8000/order/new`,cartlist)
  .then(result => {
    console.log(result);
    if(result.status === 204){
      handleCartRemove()
    }
  })
  //qty와 size, totalPrice는 따로 받아야함
}
//선생님 방식은 cartList를 map을 사용해 필요한 데이터가 담긴 객체를 생성하고 그 객체를 새로운 배열로 push 후 데이터 넘김
let totPrice = 0; //총 가격 구하기

/* const handleOrder=(e)=>{
  const newOrderList = new Array(); //[{},{},]
  cartlist.map((cart)=>{
    const orderProduct= {
      id : cart.id,
      pid : cart.pid
    }
    newOrderList.push(orderProduct);
  })
} */
//선생님 방식의 주문

useEffect(()=>{
  if(userInfo){
    axios.get(`http://127.0.0.1:8000/carts/${userInfo.id}`)
    .then(result=>{
      setCartList(result.data)
      console.log(result.data);
      totPrice = result.data.reduce((total,item)=>total+(item.price*item.qty),0);
      //0은 total의 값을 초기화하는 값 0이나 다른 값을 넣지 않으면 total이 undefined이기 때문에 item.lprice와 더했을 때 오류가 발생한다.
      setSumPrice(totPrice);// 장바구니 데이터를 get한 곳에서 총 가격 함수 진행
      setTotal(totPrice);
      //최초 총 가격 출력
      
      // setOrderList({...orderList})
    })

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

const handleDataset = (e)=>{
  console.log(e.target.dataset.id);
  //********************** 새로운 방법
  //event 대상의 data-id props key에 해당하는 값을 가져오는 함수 
}

const handleCartRemove =async ()=>{
  await axios.delete(`http://127.0.0.1:8000/carts/removelist/${userInfo.id}`)
  .then(result => {
    if(result.status === 200){
      alert('결제 화면으로 이동')
      navigate('/')
    }
  })
}



const handleRemove = (cid)=>{
  // 장바구니 테이블은 하나이고 cid는 primary key인데  굳이 userid가 필요한지에 대한 의문
  // 나중에 필요할 때 userid와 cid를 함께 사용하자
  // 보안성? cid만 보내서 삭제할 수 있다면 아무 cid만 보내도 삭제가 될 수 있으나 id까지 매칭 시킨다면 더 안전할 수 있다
  axios.delete(`http://127.0.0.1:8000/carts/remove/${cid}`)
  .then(result => {
    if(result.status === 204){
      // 컴포넌트만 리렌더링 하고싶으나 더 공부하고 다음에 해보기 (setState활용)
      window.location.reload();
    }
  })
}// 장바구니 상품 삭제 기능


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
                <th>번호 <Form.Check type='checkbox' onChange={handleAllcheck}/></th>
                <th>상품 사진 </th>
                <th>상품 이름</th>
                <th>상품 사이즈</th>
                <th>상품 가격</th>
                <th>상품 수량</th>
                <th>상품 수량 변경</th>
                <th>상품 총 가격</th>
                <th>상품 삭제</th>
              </tr>
            </thead>
            <tbody>
          {
            cartlist.map((list)=>{
                
              return <tr key={list.rno}>
                    <td>{list.rno} <Form.Check type='checkbox' onChange={handleChange} data-id ={list.cid} checked={boolFlag}/></td>
                    <td><img className='list_image' src={list.image} /></td>
                    <td>{list.name}</td>
                    <td>{list.size}</td>
                    <td>{list.price}</td>
                    <td>{list.qty}</td>
                    <td>
                      <Quantity qty={list.qty} getQty={getQty} price={list.price} cid={list.cid}/>
                    </td>
                    <td>{list.lprice}</td>
                    <td>
                      <Button variant='danger' onClick={()=>/* handleDataset */handleRemove(list.cid)/* 함수표현식에서 (이벤트 e) e.target.dataset.id 로 data-id 호출가능*/} data-id = {list.cid}>삭제</Button>
                    </td>
                  </tr>
            })
          }
            </tbody>
          </Table>
          <div className='total_price'>
            <p>총 상품가격 : {sumPrice.toLocaleString()}원</p>
            <p>+ 총 배송비 : </p>
            <p>= 총 주문금액 : {total.toLocaleString()}원</p>
            <Button onClick={handlePay}>주문</Button>
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