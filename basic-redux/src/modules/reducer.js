const rinfo = {name:'고길동',age:20,addr:'서울'};
export default function reducer(state=rinfo, action){ // 스토어 호출 함수
  switch (action.type) {
    case 'plus':
      return {
        name : state.name,
        age: state.age +1,
        addr: state.addr
      };
    case 'reset':
      return{
        name : state.name,
        age: 20,
        addr: state.addr
      }
    case 'minus':
      return{
        name : state.name,
        age: state.age - 1,
        addr: state.addr
      }
    default:
      return state;
  }
}