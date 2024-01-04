import {createSelector} from 'reselect'

const getCartList = (state) => state.reduxCartList.cartList;
const getTotalCount = (state) => state.reduxCartList.totalCount;
const getTotalPrice = (state) => state.reduxCartList.totalPrice;
const getPageSize = (state) => state.reduxCartList.pageSize;
const getCheck = (state) => state.reduxQtyUpdate.check
const getDeleteFlag = (state) => state.reduxCartItemDelete.deleteFlag
export const getCartListData = createSelector(
  [getCartList,getTotalCount,getTotalPrice,getPageSize,getCheck,getDeleteFlag],
  (cartList,totalCount,totalPrice,pageSize,check,deleteFlag) => {
    if(deleteFlag){
      totalCount = totalCount-1
    }
    return{
      cartList,
      totalCount,
      totalPrice,
      pageSize,
      check,
      deleteFlag
    }
  }
)