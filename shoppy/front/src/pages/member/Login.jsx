import { Link } from "react-router-dom";

export default function Login(){
  return(
    <div className="login inner">
        <form>
          <p>로그인</p>
          <ul>
            <li><input name="id" type="text" id="id" placeholder="id"/></li>
            <li><input name="pass" type="password" id="pass" placeholder="password"/></li>
            <li><button>로그인</button></li>
          </ul>
        </form>

        <div>
          <p>아이디, 비밀번호 찾기</p>
          <Link to="/signup"><p>회원가입</p></Link>
        </div>

    </div>
  );
}