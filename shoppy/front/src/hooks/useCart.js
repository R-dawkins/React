import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function useCart(curPage,userInfo){
  const [cartlist,setCartList] = useState([]);
  const [totItem, setTotItem] = useState(1);
  const [sumPrice,setSumPrice] = useState(0);
  const [total,setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(3);

  const navigate = useNavigate();
  let totPrice = 0;
  useEffect(()=>{
    let startIndex = 0;
    startIndex = ((curPage-1) * pageSize)
    if(userInfo){
      console.log(startIndex,pageSize);
      axios.get(`http://127.0.0.1:8000/carts/page/${userInfo.id}/${startIndex}/${pageSize}`)
      .then(result=>{
        setCartList(result.data)
        /* null pointer exception 해결 선생님 방법
          const rows = result.data[0];
          (rows === undefined) ? setTotItem(0) : setTotItem(result.data[0].cnt);
        */
        const getCnt = (result) => {
          if (result.data.length >= 1) {
            return result.data[0].cnt
          } else {
            return undefined
          }
        };
        const getPrice = (result) => {
          if (result.data.length >= 1) {
            return totPrice = result.data[0].total_price
          } else {
            return totPrice = 0;
          }
        };
        setTotItem(getCnt(result))
        // totPrice = result.data.reduce((total,item)=>total+(item.price*item.qty),0);
        
        setSumPrice(getPrice(result));
        setTotal(getPrice(result));
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
  return [cartlist,sumPrice,total,pageSize,totItem,setSumPrice,setTotal]
}