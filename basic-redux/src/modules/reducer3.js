const rinfo = {inputName:'아무개'};

export default function reducer3(state=rinfo, action){ // 스토어 호출 함수
  /* if(action.inputName !== null){
  } */
  switch (action.type) {
    case 'change':
      return {inputName : action.inputName}
    default:
      return state
  }
}