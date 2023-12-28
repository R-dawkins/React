export default function infoReducer(state,action){
  if(action.type === 'increment'){
    return {Lname: action.nextname, Lage: action.nextage};
  }
  else if(action.type === 'changeName'){
    return {name: action.nextname,age: action.nextage};
  }
  else if(action.type === 'changeAge'){
    return {name: action.nextname,age: action.nextage};
  }
}