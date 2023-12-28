import React, { useState } from 'react';
import Quantity from './Quantity';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import axios from 'axios';
import CartDeleteItem from './CartDeleteItem';
import useUpdateQty from '../hooks/useUpdateQty';
export default function CartItem({ list, setSumPrice, setTotal, sumPrice }) {
  const [qty, setQty] = useState(1)
  const {updateCartItemQty} = useUpdateQty();
  const getQty = (e) => {
    setQty(e.qty);
    if (e.checkFlag === 'plus' && e.qtyFlag) {
      setSumPrice(parseInt(sumPrice) + parseInt(e.price));
      setTotal(parseInt(sumPrice) + parseInt(e.price));


    } else if (e.checkFlag === 'minus' && e.qtyFlag) {
      setSumPrice(parseInt(sumPrice) - parseInt(e.price));
      setTotal(parseInt(sumPrice) - parseInt(e.price));
    }
    updateCartItemQty(e.cid, e.qty);
  }



  const handleUpdate = (cid, qty) => {
    axios.put(`http://127.0.0.1:8000/carts/update/${cid}/${qty}`)
      .then(result => {
        if (result.status === 204) {
        }
      })
  }
// 커스텀 훅 안에 여러 함수를 둘 수 있다
// 커스텀 훅은 순수 자바스크립트 함수 안에서 호출할 수 없다.
  // let itemQty;
  // (qty === undefined) ? itemQty = 1 : itemQty = qty;
  let [count, setCount] = useState(list.qty)
  let qtyCheckFlag = false;
  const quantityCheck = ((checkFlag)=>{
    if(checkFlag === "minus"){ // 0 = minus
      if(count <= 1){
        alert('1개 이상 구매 가능합니다')
      }else{
        setCount(--count)
        qtyCheckFlag = true;
      }
    }else{
      if(count >= 10){
        alert('10개 초과하여 구매할 수 없습니다')
      }else{
        setCount(++count)
        qtyCheckFlag = true;
      }
      
    }
    getQty({qty:count,price:list.price,checkFlag:checkFlag,cid:list.cid,qtyFlag:qtyCheckFlag});
  })

  return (
    <tr key={list.rno}>
      <td>{list.rno}</td>
      <td><img className='list_image' src={list.image} /></td>
      <td>{list.name}</td>
      <td>{list.size}</td>
      <td>{list.price}</td>
      <td>
        <div className="quantity">
          <p>
            <span onClick={() => quantityCheck("minus")}>-</span>
            <span>{count}</span>
            <span onClick={() => quantityCheck("plus")}>+</span>
          </p>
        </div>
      </td>
      <td>{list.lprice}</td>
      <td>
        <CartDeleteItem
          cid={list.cid}
        />
        {/* <Button variant='danger' onClick={() => handleRemove(list.cid)} data-id={list.cid}>삭제</Button> */}
      </td>
    </tr>
  );
}

