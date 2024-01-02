import { combineReducers } from "redux";
import reducer from "./reducer";
import reducer2 from "./reducer2";
import reducer3 from "./reducer3";
export const rootReducer = combineReducers(
  {reducer,reducer2,reducer3}
)