import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailInfo from "./DetailInfo";
import DetailImg from "./DetailImg";
import axios from "axios"
export default function ProductsDetail(){
  const [clothe,setClothe] = useState([]);
  const param = useParams()
  console.log(param);
  console.log(param.id);
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/products/${param.id}`)
    .then(res=>{setClothe(res.data)})
    // .then(data=>setClothe(data.filter((list)=>list.pid === param.id)))
  },[])
  return(
      <div className="product_detail_wrap">
        {clothe.map((list)=>{
        return <>
          <DetailImg
          pid={list.pid}
          />
          <div className="product_detail_info_wrap">
          <DetailInfo
          name={list.name}
          price={list.price}
          discription={list.discription}
          />
            <div className="product_detail_info_order">
              <form>
                <label>
                  옵션 : 
                </label>
                  <select className="product_detail_info_order_select" name="size" id="size">
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                <button className="product_detail_info_order_button">장바구니에 추가</button>
              </form>
              
            </div>
          </div>
        </>})}
      </div>
  );
}