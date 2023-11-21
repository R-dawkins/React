import axios from "axios";
import { useRef, useState } from "react";
// import { useCookies } from "react-cookie"; ------------- useCookies
import { Link, useNavigate } from "react-router-dom";
import { getCookie, removeCookie, setCookie } from "../../util/cookie";
import {jwtDecode} from 'jwt-decode'
// import * as cookie from "../../util/cookie"; 전체 함수 import 한번에 하고 싶을 시
export default function Login(){
  // const [cookie,setCookie] = useCookies(['x_auth']) ------------- useCookies
  const [form,setForm] = useState({id:'',pass:''});
  const inputId = useRef(null);
  const inputPass = useRef(null);
  const recentPage = getCookie('recent-page');
  // 저장된 쿠키 불러오기
  const navigate = useNavigate();
  function handleChange(e){
    const {name,value} = e.target;
    setForm({...form,[name]:value})
    console.log(form)
  }
  function handleSubmit(e){
    e.preventDefault();
    if(form.id.length < 1){
      alert('아이디를 입력하세요');
      return inputId.current.focus();
    }
    else if(form.pass.length < 1){
      alert('비밀번호를 입력하세요');
      return inputPass.current.focus();
    }
    axios.post('http://127.0.0.1:8000/login/',form)
    .then(result=>{
      if(result.data.login_result){
        // setCookie('x_auth',result.data.token,{path:'/'}) ------------- useCookies
        setCookie('x-auth-jwt',result.data.token,{path:'/'})
        //token에서 id 추출 후 로컬스토리지에 id 저장
        const userInfo = jwtDecode(result.data.token);
        console.log(userInfo);
        localStorage.setItem('userInfo',JSON.stringify(userInfo))
        //userid가 객체형태로 들어감
        //localStorage는 쿠키 삭제(로그아웃시)시 같이 삭제되게 하는 것이 좋음
        //로그인 후 로그인 상태 확인은 로컬스토리지에 저장된 데이터로 하는 것이 일반적
        // 장바구니에서 로그인 확인도 로컬 스토리지에 저장된 데이터를 받아서 할 수 있음
        alert('로그인 성공');
        if(recentPage){
          console.log(recentPage);
          
          navigate(recentPage)
          removeCookie('recent-page');
        }else{
          navigate('/')
        }
      }else{
        if(result.data.cnt === 1){
          alert("패스워드가 다릅니다.");
          setForm({...form,pass:''});
          inputPass.current.focus();
        }else{
          alert("아이디와 패스워드가 다릅니다.");
          setForm({id:'',pass:''})
          inputId.current.focus();
        }
        
      }
    })
  }
  function handleReset(){
    setForm({id:'',pass:''})
  }
  return(
    <div className="login inner">
        <form onSubmit={handleSubmit}>
          <p>로그인</p>
          <ul>
            <li><input ref={inputId} value={form.id} onChange={handleChange} name="id" type="text" id="id" placeholder="id"/></li>
            <li><input ref={inputPass} value={form.pass} onChange={handleChange} name="pass" type="password" id="pass" placeholder="password"/></li>
            <li><button>로그인</button><button onClick={handleReset} type="reset">다시쓰기</button></li>
          </ul>
        </form>

        <div>
          <p>아이디, 비밀번호 찾기</p>
          <Link to="/signup"><p>회원가입</p></Link>
        </div>

    </div>
  );
}