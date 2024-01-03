import { combineReducers } from "redux";
import reduxCount from "./reduxCount";
import reduxCartList from "./reduxCartList";
/* reducer 여러개를 합치는 기능 */
const rootReducer = combineReducers({
  reduxCount,
  reduxCartList
});

export default rootReducer

