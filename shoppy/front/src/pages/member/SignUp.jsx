import axios from "axios";
import { useState } from "react";

export default function SignUp(){
  const [form,setForm] = useState({id:'',name:'',pass:'',phone:''});
  function handleChange(e){
    const {name,value} = e.target
    setForm({...form,[name]:value})
    console.log(form);
  }
  
  function handleSubmit(e){
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/signup/',form) // /signup/ 이와같이 마지막에 /로 닫지 않으면 id로 인식할 수 있기 때문에 닫아준다
    .then(result=>{if(result.status === 204){window.location.href="http://127.0.0.1:3000/login"}})
  }

  return(
    <div className="SignUp inner">
      <p>회원가입</p>
      <form onSubmit={handleSubmit}>
        <ul>
          <li><input onChange={handleChange} value={form.id} name="id" type="text" placeholder="id"/></li>
          <li><input onChange={handleChange} value={form.name} name="name" type="text" placeholder="name"/></li>
          <li><input onChange={handleChange} value={form.pass} name="pass" type="password" id="" placeholder="password"/></li>
          <li><input onChange={handleChange} value={form.phone} name="phone" type="text" placeholder="phone '-' 없이"/></li>
          <li><button>회원가입</button></li>
        </ul>
      </form>
    </div>
  );
}