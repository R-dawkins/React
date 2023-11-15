import {db} from '../database/db.js'

export async function signUp(params){
  return db
  .execute('insert shoppy_member(id,name,pass,phone,mdate) values(?,?,?,?,sysdate())',params)
  .then(result=>'success')
}