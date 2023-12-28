import axios from "axios";
import { useEffect, useRef } from "react";

export default function useCartRemoveItem(buttonRef,cid){
  const handleRemove = async (e) =>{
    let confirm = window.confirm('삭제 하시겠습니까?')
    if(!confirm){
      return
    }
    axios.delete(`http://127.0.0.1:8000/carts/remove/${cid}`)
    .then(result => {
      if(result.status === 204){
        window.location.reload();
      }
    })
  }
  useEffect(()=>{
    if(buttonRef && buttonRef.current){
      buttonRef.current.addEventListener('click', handleRemove);
    }
    //buttonRef에 Click 이벤트 추가
  },[buttonRef])
}
