import {createSelector} from 'reselect'

const getCartList = (state) => state.reduxCartList.cartList;
const getTotalCount = (state) => state.reduxCartList.totalCount;
const getTotalPrice = (state) => state.reduxCartList.totalPrice;
const getPageSize = (state) => state.reduxCartList.pageSize;
const getCurPage = (state) => state.reduxCartList.curPage;
const getCheck = (state) => state.reduxQtyUpdate.check
const getDeleteFlag = (state) => state.reduxCartItemDelete.deleteFlag
// export const test = createSelector(()=>({})); >> 바로 리턴하고싶을 때
export const getCartListData = createSelector(
  [getCartList,getTotalCount,getTotalPrice,getPageSize,getCurPage,getCheck,getDeleteFlag],
  (cartList,totalCount,totalPrice,pageSize,currentPage,check,deleteFlag) => { //callback 함수를 사용하여 logic을 추가하고 싶을 때
    if(deleteFlag){
      totalCount = totalCount-1 //redux 사용시 ++,--,+=,-= 와 같은 연산자 사용 지양
    }
    return{
      cartList,
      totalCount,
      totalPrice,
      pageSize,
      currentPage,
      check,
      deleteFlag
    }
  }
)