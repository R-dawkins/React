import axios from "axios";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
export default function SignUp(){
  const [form,setForm] = useState({id:'',name:'',pass:'',phone:''});
  const navigate = useNavigate();
  function handleChange(e){
    const {name,value} = e.target
    setForm({...form,[name]:value})
    console.log(form);
  }
  //validation check(유효성 체크)
  const inputId = useRef(null);
  const inputName = useRef(null);
  const inputPass = useRef(null);
  const inputPhone = useRef(null);
  function handleSubmit(e){
    e.preventDefault();
    if(form.id.length < 1){alert('아이디를 입력 해 주십시오');return inputId.current.focus();}// validation check 실패하면 return하여 함수 종료되어 axios 실행되지1않음
    else if(form.name.length < 1){alert('이름을 입력 해 주십시오');return inputName.current.focus();}
    else if(form.pass.length < 1){alert('비밀번호를 입력 해 주십시오');return inputPass.current.focus();}
    else if(form.phone.length < 1){alert('번호를 입력 해 주십시오');return inputPhone.current.focus();}
      axios.post('http://127.0.0.1:8000/signup/',form) // /signup/ 이와같이 마지막에 /로 닫지 않으면 id로 인식할 수 있기 때문에 닫아준다
      .then(result=>{if(result.status === 204){alert('회원가입에 성공하셨습니다.');navigate("/login")}})
  }
  function handleReset(){
    setForm({id:'',name:'',pass:'',phone:''});
    // inputId.current.value=''
    // inputName.current.value=''
    // inputPass.current.value=''
    // inputPhone.current.value=''
  }
  return(
    <div className="SignUp inner">
      <p>회원가입</p>
      <form onSubmit={handleSubmit}>
        <ul>
          <li><input onChange={handleChange} ref={inputId} value={form.id} name="id" type="text" placeholder="id"/></li>
          <li><input onChange={handleChange} ref={inputName} value={form.name} name="name" type="text" placeholder="name"/></li>
          <li><input onChange={handleChange} ref={inputPass} value={form.pass} name="pass" type="password" id="" placeholder="password"/></li>
          <li><input onChange={handleChange} ref={inputPhone} value={form.phone} name="phone" type="text" placeholder="phone '-' 없이"/></li>
          <li><button>회원가입</button><button type="button" onClick={handleReset}>다시쓰기</button></li>
        </ul>
      </form>
    </div>
  );
}