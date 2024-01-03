import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import DetailInfo from "./DetailInfo";
import DetailImg from "./DetailImg";
import axios from "axios"
import { getUser } from "../util/localStorage";
import Quantity from "./Quantity";
import { setCookie } from "../util/cookie";
export default function ProductsDetail(){
  const [product,setProduct] = useState({});
  // const [count,setCount] = useState(1) // 구글링한 방법
  const [qty, setQty] = useState(1) // 선생님 방법
  const param = useParams()
  const selectSize = useRef(null);
  const userInfo = getUser();
  const navigate = useNavigate();
  const location = useLocation();
  const getQty = (e) => {
    setQty(e.qty);
    //e에 자식 컴포넌트에서 받은 count값이 들어가는 것이라고 추측 가능
  }

  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/products/${param.id}`)
    .then(res=>{setProduct(res.data[0]);})
    // .then(data=>setProduct(data.filter((product)=>product.pid === param.id)))
  },[])
  // change이벤트는 값이 변경됐을 때 체크되기때문에 default 옵션을 만들어 주어야 한다.
  function handleChange(e){
    const {name,value} = e.target;
    setProduct({...product,[name]:value})
  }
  function handleClick(e){
    //pid(상품),size,id(회원)필요
    // axios ==> http://127.0.0.1:8000/carts/new post방식
    const {pid,size} = product;
    if(userInfo){
      if(!size || size === 'default'){
        //사이즈 체크
        alert('사이즈를 선택 해 주세요')
        return selectSize.current.focus();
      }else{
        const id = getUser().id
        const params = {pid,size,id,qty}
        axios.post('http://127.0.0.1:8000/carts/new',params)
        .then(result=>{})
        // alert('장바구니에 추가 되었습니다.')
        const confirm = window.confirm("장바구니에 추가되었습니다. 장바구니로 이동하시겠습니까? 쇼핑을 계속 하시려면 취소를 눌러주십시오") //컨펌받는명령어
        if(confirm){
          navigate('/cart')
        }
        else{
          return
        }
      }
    }
    else{
      //로그인 체크
      alert('로그인 후 상품 추가가 가능합니다.')
      setCookie('recent-page',location,{path:'1'})
      navigate('/login')
      //다시 디테일페이지로 보내는 방법
    }
  }
  return(
      <div className="product_detail_wrap">
          <DetailImg
          image={product.image}
          />
          <div key={product.pid} className="product_detail_info_wrap">
          <DetailInfo
          name={product.name}
          price={product.price}
          discription={product.discription}
          />
            <div key={product.pid} className="product_detail_info_order">
              <form>
                <label>
                  옵션 : 
                </label>
                  <select ref={selectSize} className="product_detail_info_order_select" name="size" id="size" onChange={handleChange}>
                    <option value="default">선택해주세요</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                  </select>
                  <Quantity
                  getQty = {getQty}
                  qty = {qty}
                  />
                <button type="button" onClick={handleClick} className="product_detail_info_order_button">장바구니에 추가</button>
              </form>
              
            </div>
          </div>
      </div>
  );
}
//수량 추가 qty