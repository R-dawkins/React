import React from 'react';

export default function Login(){
  return(
    <div className='login'>
      <h1>Login</h1>
      <form className='login_form'>
        <input type="text" placeholder='ID'/>
        <input type="password" placeholder='Password'/>
        <button type='submit'>로그인</button>
      </form>
      <a href="#">회원가입</a>
    </div>
  );
  }