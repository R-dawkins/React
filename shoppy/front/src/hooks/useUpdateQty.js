import axios from "axios"

export default function useUpdateQty(){
  const updateCartItemQty = (cid,qty)=>{
    axios.put(`http://127.0.0.1:8000/carts/update/${cid}/${qty}`)
    .then(result => {
      if (result.status === 204) {
      }
    })
  }
  return {updateCartItemQty}
}

//커스텀 훅 안의 함수를 여러개 사용할 수 있다