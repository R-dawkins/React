import axios from 'axios';
import React, { useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import useCartRemoveItem from '../hooks/useCartRemoveItem';
import { useDispatch } from 'react-redux';
import { cartItemDelete } from '../api/cartsAPI';

export default function CartDeleteItem({cid}) {
  const dispatch = useDispatch();
  
  // const buttonRef = useRef(null);
  // useCartRemoveItem(buttonRef,cid);
  const handleDelete = () => {
    console.log('delete');
    const confirm = window.confirm("정말로 삭제하시겠습니까?");
    if(confirm){
      dispatch(cartItemDelete({cid}));
    }
  } 
  return (
      <Button variant='danger' 
      /* onClick={() => handleRemove}
      data-id={cid}  */
      // ref={buttonRef}
      onClick={()=>handleDelete()}
      >삭제</Button>
  );
}
// 커스텀 훅은 순수 자바스크립트 코드에서 호출할 수 없음 ex) onClick에서 바로 useCartRemove를 사용할 수 없다
// 리액트에서 onClick 이벤트를 감지해서 useCartRemove를 호출하는 식으로 사용해야한다 여기선 useRef사용
