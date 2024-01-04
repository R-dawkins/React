const init = {check:false};

export default function reduxQtyUpdate(state=init,action){
  switch (action.type) {
    case "UPDATE_SUCCESS":
      return {
        check : action.check
      }
    default:
      return state
  }
}