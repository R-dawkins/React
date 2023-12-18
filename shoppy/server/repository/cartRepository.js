import { db } from "../database/db.js";
export async function addCart(params){
  return db
  .execute('insert shoppy_cart(qty,pid,size,id,cdate) values(?,?,?,?,sysdate())',params)
  .then(result=>'success')
}
export async function getPageList(params){
  const sql = `select row_number() over(order by sc.cdate) as rno, sc.size, sc.cid ,sp.pid, sp.image, sp.name, sp.price, sc.qty, sp.price*sc.qty as lprice, cnt, total_price
	from shoppy_cart sc,shoppy_products sp,shoppy_member sm,(select count(*) as cnt, sum(sp.price*sc.qty) total_price from shoppy_cart sc,shoppy_products sp where sc.pid = sp.pid and id = ?) cart
	where sc.pid = sp.pid and sc.id = sm.id and sc.id = ? limit ?,?`
  return db
  .execute(sql,params)
  .then(result=>result[0])
}

/* export async function getPageList(params){
  return db
  .execute('select * from (select row_number() over(order by sc.cdate) as rno, sc.size, sc.cid ,sp.pid, sp.image, sp.name, sp.price, sc.qty, sp.price*sc.qty as lprice, cnt
	from shoppy_cart sc,shoppy_products sp,shoppy_member sm,(select count(*) as cnt from shoppy_cart where id = 'test') cart
	where sc.pid = sp.pid and sc.id = sm.id and sc.id = ?) cart_list where rno between ? and ?',params)
  .then(result=>result[0])
} */ //between and 사용법

/* export async function getCart(id){
  return db
  .execute('select row_number() over(order by sc.cdate) as rno, sm.id, sc.size, sc.cid ,sp.pid, sp.image, sp.name, sp.price, sc.qty, sp.price*sc.qty as lprice from shoppy_cart sc,shoppy_products sp,shoppy_member sm where sc.pid = sp.pid and sc.id = sm.id and sc.id = ?',[id])
  .then(result=>result[0])
}
 */ // 전부 get
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