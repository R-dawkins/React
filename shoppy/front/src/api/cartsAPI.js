import axios from "axios";
import { getFetchDataList } from "../modules_redux/reduxCartList";
import { removeSuccess } from "../modules_redux/reduxCartItemDelete";

/* 장바구니 리스트 */
export const cartListFetchData = ({userInfo,curPage,totalCount,deleteFlag}) =>{
  let startIndex = 0;
  const pageSize = 3;
  console.log(curPage);
if(deleteFlag && (totalCount % 3) === 0 && curPage !== 1){
  curPage = curPage - 1
}
console.log(curPage);
  startIndex = ((curPage-1) * pageSize)
  return async (dispatch)=>{
    console.log(startIndex,pageSize);
    const result = await axios.get(`http://127.0.0.1:8000/carts/page/${userInfo.id}/${startIndex}/${pageSize}`)
    let cartList = result.data;
    const rows = result.data[0];
    let totalPrice = 0;
    if(rows !== undefined){
      totalCount = result.data[0].cnt;
      totalPrice = result.data[0].total_price;
    }
  dispatch(getFetchDataList({cartList,totalCount,totalPrice,pageSize,curPage}));
  dispatch((removeSuccess(false)));
  }
}

  export const cartQtyUpdate = ({cid,flag,number,check}) => {
    return async (dispatch)=>{
      if(flag === null){
        return
      }
      console.log(check);
        await axios.put(`http://127.0.0.1:8000/carts/update/${cid}/${number}`)
        .then(result=>{console.log('update success')
        dispatch({
          type: "UPDATE_SUCCESS",
          check:check
        })
      })
    }
      
  }

  export const cartItemDelete = ({cid})=>{

    return async (dispatch)=>{
      await axios.delete(`http://127.0.0.1:8000/carts/remove/${cid}`)
      .then(result=>{
        console.log('delete success')
        /* dispatch({
          type:"DELETE_SUCCESS",
          deleteFlag: true
        }) */
        dispatch(removeSuccess(true))
    })
    }
  }
// 여기서 alert 사용하면 안됨
// dispatch가 두번 연속 가능한 이유 > thunk 라이브러리 사용으로 가능