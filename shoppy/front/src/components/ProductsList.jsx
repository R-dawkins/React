import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductsList(){
  const [list,setList] = useState([]);
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/products/')
    .then(res=>setList(res.data))
  },[])
  return(
    <div className="products_list_wrap inner">
      {
        list.map((list)=>{
        return <div key={list.pid} className={`products_list_item_${list.pid} products_list_item`}>
          <div>
            <Link to={`${list.pid}`}><img src={`http://localhost:8000/${list.image}`}/></Link>
          </div>
          <div><Link to={`${list.pid}`}><p>{list.name}</p></Link></div>
        </div>
        })
      }
    </div>
  );
}