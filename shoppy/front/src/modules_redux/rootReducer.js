import { combineReducers } from "redux";
import reduxCount from "./reduxCount";
import reduxCartList from "./reduxCartList";
import reduxQtyUpdate from "./reduxQtyUpdate";
import reduxCartItemDelete from "./reduxCartItemDelete";
/* reducer 여러개를 합치는 기능 */
// reducer끼리 state 공유 가능
const rootReducer = combineReducers({
  reduxCount,
  reduxCartList,
  reduxQtyUpdate,
  reduxCartItemDelete
});

export default rootReducer

