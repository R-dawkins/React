import axios from "axios"
import { Navigate } from "react-router-dom"

export default function useOrder(cartlist,userInfo){
  const handleOrder =(cartlist)=>{
    axios.post(`http://127.0.0.1:8000/order/new`,cartlist)
    .then(result => {
      
      if(result.status === 204){
        handleCartRemove()
      }
    })
  }

  const handleCartRemove = async ()=>{
    await axios.delete(`http://127.0.0.1:8000/carts/removelist/${userInfo.id}`)
    .then(result => {
      if(result.status === 200){
        alert('결제 화면으로 이동')
        Navigate('/order')
      }
    })
  }
  

  return {handleOrder}
}