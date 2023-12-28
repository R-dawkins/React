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
export default function countReducer(count, action){
  if(action.type === 'increment'){
    return count + action.number;
  }
  else if(action.type === 'decrement'){
    return count - action.number;
  }
  else if(action.type === 'reset'){
    return (count = 0);
  }
  else if(action.type === 'change'){
    // return ()
  }
}