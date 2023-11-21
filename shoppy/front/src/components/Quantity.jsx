import React, { useState } from "react";

export default function Quantity({getQty}){
  let [count, setCount] = useState(1)
  const quantityCheck = ((checkFlag)=>{
    if(checkFlag === "minus"){ // 0 = minus
      count <= 1 ? alert('1개 이상 구매 가능합니다') : setCount(--count);
    }else{
      count >= 10 ? alert('10개 초과하여 구매할 수 없습니다') : setCount(++count)
    }
    getQty(count);
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