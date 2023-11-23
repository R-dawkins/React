import React, { useState } from "react";

export default function Quantity({getQty,qty,price,cid}){
  //qty를 못받았을 때는 1, qty를 받았을 때는 qty를 넣으면 된다.
  let itemQty;
  (qty === undefined) ? itemQty = 1 : itemQty = qty;
//
  let [count, setCount] = useState(itemQty)
  let qtyCheckFlag = false;
  //flag로 처리하는 방법
  const quantityCheck = ((checkFlag)=>{
    if(checkFlag === "minus"){ // 0 = minus
      if(count <= 1){
        alert('1개 이상 구매 가능합니다')
      }else{
        setCount(--count)
        qtyCheckFlag = true;
        // getQty({qty:count,price:price,checkFlag:checkFlag,cid:cid});
      }
    }else{
      if(count >= 10){
        alert('10개 초과하여 구매할 수 없습니다')
      }else{
        setCount(++count)
        qtyCheckFlag = true;
        // getQty({qty:count,price:price,checkFlag:checkFlag,cid:cid});
      }
      
    }
    getQty({qty:count,price:price,checkFlag:checkFlag,cid:cid,qtyFlag:qtyCheckFlag});
    //수량,가격,더하기인지 빼기인지
  })
  // 함수표현식은 글로벌로 선언되어 바로 실행됨
  // 함수선언식은 아님
  return(
    <div className="quantity">
    <p>      
      <span onClick={()=>quantityCheck("minus")}>-</span>
      <span>{count}</span>
      <span onClick={()=>quantityCheck("plus")}>+</span>
    </p>
    </div>
  );
}