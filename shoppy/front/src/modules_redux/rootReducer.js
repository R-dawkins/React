import { combineReducers } from "redux";
import reduxCount from "./reduxCount";

/* reducer 여러개를 합치는 기능 */
const rootReducer = combineReducers({
  reduxCount
});

export default rootReducer

