/*  react 기본 문법
export default function countReducer(state, action){

  switch (action.type) {
    case 'increment' :
      return {count: state.count + 1};
    case 'decrement' :
      return {count: state.count - 1};
    case 'reset' :
      return {count: 0};
    default:
      throw new Error();
  } 
}
*/
export default function countReducer(state, action){
  const tot = state.total
  if(action.type === 'increment'){
    console.log(state.count,action.number);
    return {count : state.count + action.number, total : tot + state.count};
  }
  else if(action.type === 'decrement'){
    return {count : state.count - action.number, total : tot - state.count};
  }
  else if(action.type === 'reset'){
    return {count: 0};
  }
  else if(action.type === 'change'){
    // return ()
  }
}