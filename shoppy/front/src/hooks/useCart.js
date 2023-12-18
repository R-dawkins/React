import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useCart(curPage,userInfo,pageSize){
  const [cartlist,setCartList] = useState([]);
  const [totItem, setTotItem] = useState(1);
  const navigate = useNavigate();
  const [sumPrice,setSumPrice] = useState(0);
  const [total,setTotal] = useState(0);
  // const [curPage, setCurPage] = useState(1);
  let totPrice = 0;
  useEffect(()=>{
    let startIndex = 0;
    startIndex = ((curPage-1) * pageSize)
    if(userInfo){
      axios.get(`http://127.0.0.1:8000/carts/${userInfo.id}/${startIndex}/${pageSize}`)
      .then(result=>{
        setCartList(result.data)
        console.log(result);
        const getCnt = (result) => {
          if (result) {
            return result.data[0].cnt;
          } else {
            return undefined;
          }
        };
        console.log(result.data[0].cnt);
        setTotItem(getCnt())
        console.log(getCnt());
        console.log(totItem);
        totPrice = result.data.reduce((total,item)=>total+(item.price*item.qty),0);
        setSumPrice(totPrice);
        setTotal(totPrice);
      })
    }
    else{
      let confirm = true;
      confirm = window.confirm('로그인이 필요합니다. 로그인 페이지로 이동하시겠습니까?')
      if(confirm){
        navigate('/login')
      }else{
        navigate('/')
      }
    }
  },[curPage])
  return [cartlist,sumPrice,total]
}