const init = {
  deleteFlag:false
}
export default function reduxCartItemDelete(state=init,action){
  console.log(action);
  switch (action.type) {
    case "DELETE_SUCCESS":
      return {
        deleteFlag : action.deleteFlag
      }
    default:
      return {
        deleteFlag:false 
      }
  }
}
//deleteFlag가 case "DELETE_SUCCESS"가 실행되었다가 다른 action(예를들어 "FETCH_DATA_SUCCESS")이 실행될 때 
//rootReducer에서 combine 된 다른 모든 reducer가 실행되기 때문에 default가 반환되어 다시 false로 return된다
//