import {db} from '../database/db.js'

export async function signUp(params){
  return db
  .execute('insert shoppy_member(id,name,pass,phone,mdate) values(?,?,?,?,sysdate())',params)
  .then(result=>'success')
}

export async function login(id){
  return db
  .execute('select count(pass) cnt, ANY_VALUE(pass) pass from shoppy_member where id = ?',[id])
  .then(result=>result[0][0])
  //로그인을 진행할 때는 count함수를 쓴다 어떤 DB이든지
  
}

export async function checkId(id){
  return db
  .execute('select count(id) cnt, any_value(id) id from shoppy_member where id = ?',[id])
  .then(result=>result[0][0])
}