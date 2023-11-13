import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ProductsList(){
  const [list,setList] = useState([]);
  useEffect(()=>{
    fetch('/database/clothes.json')
    .then(res=>res.json())
    .then(data=>setList(data))
  },[])
  return(
    <div className="products_list_wrap inner">
      {
        list.map((list)=>{
        return <div className={`products_list_item_${list.pid} products_list_item`}>
          <div>
            <Link to={`${list.pid}`}><img src={list.image}/></Link>
          </div>
          <div><Link to={`${list.pid}`}><p>{list.name}</p></Link></div>
        </div>
        })
      }
    </div>
  );
}