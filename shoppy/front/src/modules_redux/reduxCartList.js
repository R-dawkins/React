/* 
  MyCart 호출 : DB에서 장바구니 리스트 출력 이벤트(액션) 
  -> dispatch(장바구니 DB에서 가져오는 API 호출 :: Action Reducer)
  -> dispatch(action을 이용하여 store에 전달 :: Action Reducer)
  -> useSelector(reselect를 import한 함수:: 렌더링의 효율적인 처리)
  -> selector 함수에서 전달하는 데이터 출력

  [dispatch :: 액션 호출]
  MyCart -----------> cartsAPI ----------> reduxCartList
          dispatch               dispatch
  [useSelector :: 액션함수에서 데이터 Get]
  Mycart -----------> reSelector 함수 -------------> reduxCartList
          useSelector               state 호출

  REDUX로 API 호출, 사용 과정
  Cart.jsx에서 dispatch(cartListFetchData({userInfo,curPage})) 호출
  >> cartsAPI.js에서 cartListFetchData 함수 실행 
  >> 내부에서 dispatch(type:FETCH_DATA_SUCCESS) 호출
  >> reduxCartList.js에서 case 'FETCH_DATA_SUCCESS' 실행
  >> Cart.jsx에서 useSelector로 state 호출
  >> 호출 때 마다 store에 다녀오는 비효율을 개선하기위해 reselect 라이브러리 사용하여 useSelector(getCartListData) 호출
  >> reduxSelector.js에서 getCartListData 실행
  >> state 사용 준비 완료
 */

const init = {
  cartList: null,
  totalCount:0,
  totalPrice:0,
  pageSize:3
}
export default function reduxCartList(state=init,action){
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS':
      return { 
        cartList:action.cartList,
        totalCount:action.totalCount,
        totalPrice:action.totalPrice,
        pageSize:action.pageSize
      }
    default:
      return state
  }
}