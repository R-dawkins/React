import { createSelector } from "reselect"
/* reducer 함수의 state값 가져오기 */
//reducer가 여러개일때는 각각의 reducer이름 추가
const getName = (state)=>state.reducer.name;
const getAge = (state)=>state.reducer.age;
const getAddr = (state)=>state.reducer.addr;
const getNick = (state)=>state.reducer2.nickname;
const getInputData = (state)=>state.reducer3.inputName;
export const getPersonData = createSelector(
  [getName,getAge,getAddr,getNick],(name,age,addr,nickname)=>({
    name,
    age,
    addr,
    nickname
  })
);
/* name을 출력하는 함수 */
export const getPersonName = createSelector(
  [getName],(name)=>({
    name
  })
)

export const changePersonName = createSelector(
  [getName,getInputData],(name,cname)=>({
    name
  })
)
export const getInputName = createSelector(
  [getInputData],((inputName)=>({
    inputName
  }))
)
//함수로 store에 있는 state를 받아와서 메모해놓아서
//렌더링마다 store에 직접 가는 것을 방지한다.