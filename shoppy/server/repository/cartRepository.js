import { db } from "../database/db.js";
export async function addCart(params){
  return db
  .execute('insert shoppy_cart(qty,pid,size,id,cdate) values(?,?,?,?,sysdate())',params)
  .then(result=>'success')
}
export async function getCart(id){
  return db
  .execute('select row_number() over(order by sc.cdate) as rno, sm.id, sc.size, sc.cid ,sp.pid, sp.image, sp.name, sp.price, sc.qty, sp.price*sc.qty as lprice from shoppy_cart sc,shoppy_products sp,shoppy_member sm where sc.pid = sp.pid and sc.id = sm.id and sc.id = ?',[id])
  .then(result=>result[0])
}

export async function removeCartItem(cid){
  return db
  .execute('delete from shoppy_cart where cid=?',[cid])
  .then(result=>'success')
}

export async function updateCart(params){
  return db
  .execute('update shoppy_cart set qty=? where cid = ?',params)
  .then(result=>'success')
}

export async function removeCart(id){
  return db
  .execute('delete from shoppy_cart where id =?',[id])
  .then(result=>'success')
}