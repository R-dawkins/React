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
      return state
  }
}