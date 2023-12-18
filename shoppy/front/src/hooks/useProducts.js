import axios from "axios";
import { useEffect, useState } from "react";

export default function useProducts(baseUrl){
  const [list,setList] = useState([]);
  useEffect(()=>{
    axios.get(baseUrl)
    .then(res=>setList(res.data))
    .catch((err)=> console.log(err))
  },[])

  return [list]
}
// 아래의 함수를 위와 같이 커스텀훅 화 함

/*   const [list,setList] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/products/')
    .then(res=>setList(res.data))
  },[]) */

// 커스텀훅은 최상단에 선언용으로 쓰인다
// 컴포넌트안의 useEffect 훅 안에 커스텀 훅을 넣어 사용하는 것은 안된다.