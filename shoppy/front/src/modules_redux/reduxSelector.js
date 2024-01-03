import {createSelector} from 'reselect'

const getCartList = (state) => state.reduxCartList.cartList;
const getTotalCount = (state) => state.reduxCartList.totalCount;
const getTotalPrice = (state) => state.reduxCartList.totalPrice;
const getPageSize = (state) => state.reduxCartList.pageSize;

export const getCartListData = createSelector(
  [getCartList,getTotalCount,getTotalPrice,getPageSize],
  (cartList,totalCount,totalPrice,pageSize) => ({
    cartList,
    totalCount,
    totalPrice,
    pageSize
  })
)