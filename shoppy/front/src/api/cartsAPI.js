import axios from "axios";

/* 장바구니 리스트 */
export const cartListFetchData = ({userInfo,curPage,totalCount,deleteFlag}) =>{
  let startIndex = 0;
  const pageSize = 3;
  console.log(curPage);
if(deleteFlag && (totalCount % 3) === 0){
  curPage = curPage - 1
}
console.log(curPage);
  startIndex = ((curPage-1) * pageSize)
  return async (dispatch)=>{
    console.log(startIndex,pageSize);
    const result = await axios.get(`http://127.0.0.1:8000/carts/page/${userInfo.id}/${startIndex}/${pageSize}`)
    // dispatch();
    let cartList = result.data;
    const rows = result.data[0];
    // totalCount = 0
    let totalPrice = 0;
    if(rows !== undefined){
      totalCount = result.data[0].cnt;
      totalPrice = result.data[0].total_price;
    }
    /* let totalCount = 0;
    let totalPrice = 0;
    const rows = result.data[0]; */
    //삭제가 일어나면 totalcount에서 -1뺀다 
    //totalcount가 3의 배수일때  나머지가 0일때 page를 1개 뺀다 



/*     if(startIndex !== 0 && rows === undefined){
      startIndex = ((curPage-2) * pageSize)
      const result = await axios.get(`http://127.0.0.1:8000/carts/page/${userInfo.id}/${startIndex}/${pageSize}`)
      console.log(result);
      cartList = result.data;
      totalCount = result.data[0].cnt;
      totalPrice = result.data[0].total_price;
    }
    else if(rows !== undefined){
      totalCount = result.data[0].cnt;
      totalPrice = result.data[0].total_price;
    } */
    /* if(rows !== undefined){
      }  */
      // null pointer exception
    

  // const cartList = JSON.parse(JSON.stringify(result.data)) 과거에 dispatch에서 인식하지 못하는 현상 발생 하여 쓰던 방법
  // const cartList = result.data >> axios 사용시
  // const cartList = JSON.parse(result.data) fetch 사용시
    dispatch({
      type : "FETCH_DATA_SUCCESS",
      cartList:cartList,
      totalCount:totalCount,
      totalPrice:totalPrice,
      pageSize:pageSize,
      curPage:curPage
    }); //store에 접근하는 dispatch
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
        dispatch({
          type:"DELETE_SUCCESS",
          deleteFlag: true
        })
    })
    }
  }
// 여기서 alert 사용하면 안됨
// dispatch가 두번 연속 가능한 이유 > thunk 라이브러리 사용으로 가능