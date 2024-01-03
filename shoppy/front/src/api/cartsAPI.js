import axios from "axios";

/* 장바구니 리스트 */
export const cartListFetchData = ({userInfo,curPage}) =>{
  let startIndex = 0;
  const pageSize = 3;

  console.log(userInfo,curPage);
  startIndex = ((curPage-1) * pageSize)
  return async (dispatch)=>{
    const result = await axios.get(`http://127.0.0.1:8000/carts/page/${userInfo.id}/${startIndex}/${pageSize}`)
    // dispatch();
    const cartList = result.data;
    const totalCount = result.data[0].cnt;
    const totalPrice = result.data[0].total_price;

  // const cartList = JSON.parse(JSON.stringify(result.data)) 할필요없는듯
    dispatch({
      type : "FETCH_DATA_SUCCESS",
      cartList:cartList,
      totalCount:totalCount,
      totalPrice:totalPrice,
      pageSize:pageSize
    });
  }
}