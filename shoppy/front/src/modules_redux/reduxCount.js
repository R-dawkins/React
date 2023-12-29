/* const init = () => {
  return {count:0,total:0};
} */
const init = {count:0,total:0};
export default function reduxCount(state=init, action) {
  const tot = state.total;
  if (action.type === 'increment') {
    return {
      count: state.count + 1,
      total: tot + state.count
    };
  }
  else if (action.type === 'decrement') {
    return {
      count: state.count - 1,
      total: tot - state.count
    };
  }
  else if (action.type === 'reset') {
    return { count: 0,total : 0 };
  }
  else if (action.type === 'change') {
    // return ()
  }else{
    return state
  }
}

//기본적으로 reduxCount가 반환하는 값이 없으면 에러가 뜬다
//if문보다 switch case문 권장